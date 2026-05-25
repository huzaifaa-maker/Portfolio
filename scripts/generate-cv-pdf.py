from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Image,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "Huzaifa-Altaf-Professional-CV.pdf"
PHOTO = ROOT / "public" / "assets" / "huzaifa-cv-photo.jpeg"

BLUE = colors.HexColor("#2563EB")
BLUE_DARK = colors.HexColor("#1D4ED8")
INK = colors.HexColor("#111827")
MUTED = colors.HexColor("#4B5563")
LIGHT = colors.HexColor("#EFF6FF")
BORDER = colors.HexColor("#BFDBFE")

LINKS = {
    "portfolio": "https://huzaifa-altaf-portfolio.vercel.app",
    "email": "mailto:huzaifaltaf15@icloud.com",
    "whatsapp": "https://wa.me/923195639447",
    "github": "https://github.com/huzaifaa-maker",
    "linkedin": "https://www.linkedin.com/in/huzaifa-altaf-45227527b",
    "instagram": "https://www.instagram.com/huxaifa.here",
    "fiverr": "https://www.fiverr.com/pe/Dx5QwX",
    "rms": "https://github.com/huzaifaa-maker/RMS-Rental-Management-System-App-",
    "campus": "https://github.com/huzaifaa-maker/Campus-Helper-App-CH-",
    "parallel": "https://github.com/huzaifaa-maker/parallel_performance_analyzer",
    "compiler": "https://github.com/huzaifaa-maker/Pro-Compiler-In-Python-Compiler-Construction",
    "unity": "https://github.com/huzaifaa-maker/Unity-3D-Game-JumpQuest-",
    "portfolio_repo": "https://github.com/huzaifaa-maker/Portfolio-React-js-",
}

styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        fontName="Helvetica-Bold",
        fontSize=25,
        leading=29,
        textColor=INK,
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica-Bold",
        fontSize=10,
        leading=13,
        textColor=INK,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        fontName="Helvetica",
        fontSize=7.6,
        leading=10.2,
        textColor=MUTED,
    )
)
styles.add(
    ParagraphStyle(
        name="SectionTitle",
        fontName="Helvetica-Bold",
        fontSize=12,
        leading=14,
        textColor=BLUE_DARK,
        spaceBefore=8,
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="ItemTitle",
        fontName="Helvetica-Bold",
        fontSize=9.4,
        leading=11.4,
        textColor=INK,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="Meta",
        fontName="Helvetica-Bold",
        fontSize=7.8,
        leading=10,
        textColor=BLUE_DARK,
        spaceAfter=1,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.8,
        textColor=colors.HexColor("#1F2937"),
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        fontName="Helvetica",
        fontSize=7.5,
        leading=9.7,
        textColor=MUTED,
    )
)
styles.add(
    ParagraphStyle(
        name="Chip",
        fontName="Helvetica-Bold",
        fontSize=7.5,
        leading=10,
        textColor=BLUE_DARK,
        alignment=1,
    )
)


def a(text, href):
    return f'<link href="{href}"><font color="#2563EB"><u>{text}</u></font></link>'


def section(title):
    return [
        Paragraph(title, styles["SectionTitle"]),
        Table([[""]], colWidths=[170 * mm], rowHeights=[0.55], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), BLUE)])),
        Spacer(1, 4),
    ]


def item(title, meta, body, link_text=None, href=None):
    title_markup = title
    if link_text and href:
        title_markup = f"{title} - {a(link_text, href)}"
    return KeepTogether(
        [
            Paragraph(title_markup, styles["ItemTitle"]),
            Paragraph(meta, styles["Meta"]),
            Paragraph(body, styles["Body"]),
            Spacer(1, 5),
        ]
    )


def chips(items):
    rows = []
    row = []
    for skill in items:
        row.append(Paragraph(skill, styles["Chip"]))
        if len(row) == 5:
            rows.append(row)
            row = []
    if row:
        while len(row) < 5:
            row.append("")
        rows.append(row)

    table = Table(rows, colWidths=[34 * mm] * 5, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), LIGHT),
                ("BOX", (0, 0), (-1, -1), 0.35, BORDER),
                ("INNERGRID", (0, 0), (-1, -1), 1.3, colors.white),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                ("LEFTPADDING", (0, 0), (-1, -1), 3),
                ("RIGHTPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return table


def header():
    photo = Image(str(PHOTO), width=31 * mm, height=31 * mm)
    text = [
        Paragraph("Huzaifa Altaf", styles["Name"]),
        Table([[""]], colWidths=[88 * mm], rowHeights=[0.75], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), BLUE)])),
        Paragraph("Full Stack Developer | Flutter App Developer | Website Developer", styles["Role"]),
        Paragraph(
            f"Email: {a('huzaifaltaf15@icloud.com', LINKS['email'])} | WhatsApp: {a('+92 319 5639447', LINKS['whatsapp'])}",
            styles["Contact"],
        ),
        Paragraph(
            f"GitHub: {a('github.com/huzaifaa-maker', LINKS['github'])} | LinkedIn: {a('huzaifa-altaf-45227527b', LINKS['linkedin'])}",
            styles["Contact"],
        ),
        Paragraph(
            f"Portfolio: {a('huzaifa-altaf-portfolio.vercel.app', LINKS['portfolio'])} | Fiverr: {a('fiverr.com/pe/Dx5QwX', LINKS['fiverr'])}",
            styles["Contact"],
        ),
        Paragraph(f"Instagram: {a('instagram.com/huxaifa.here', LINKS['instagram'])}", styles["Contact"]),
    ]
    table = Table([[photo, text]], colWidths=[36 * mm, 134 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return table


def build():
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=15 * mm,
        bottomMargin=14 * mm,
        title="Huzaifa Altaf Professional CV",
        author="Huzaifa Altaf",
    )

    story = [header(), Spacer(1, 5)]

    story += section("Profile")
    story.append(
        Paragraph(
            "Computer Science student at NFC Institute of Engineering and Technology, Multan, focused on building mobile apps, web platforms, APIs, dashboards, and practical software products. Strong interest in Flutter, Firebase, React, Node.js, MongoDB, UI/UX, and clean product delivery.",
            styles["Body"],
        )
    )

    story += section("Education")
    story += [
        item("Bachelor's Degree in Computer Science", "NFC Institute of Engineering and Technology, Multan | 2023 - Present", "Pursuing Computer Science with focus on software development, UI/UX, mobile apps, web systems, databases, and modern technologies."),
        item("Intermediate", "Muslim Group of Schools and Colleges | 2021 - 2022", "Focused on pre-engineering studies with physics, chemistry, mathematics, and analytical thinking."),
        item("Matriculation", "Muslim Group of Schools and Colleges | 2019 - 2020", "Completed secondary education with a strong foundation in science and mathematics."),
    ]

    story += section("Projects")
    story += [
        item("Rental Management System App", "Flutter, Firebase, Node.js, MongoDB", "Rental operations app with dashboards, properties, tenants, rent payments, bills, maintenance, leases, and API integration.", "Code", LINKS["rms"]),
        item("Campus Helper App", "Flutter, Firebase, Node.js, MongoDB", "Campus assistant with authentication, chat, marketplace, cafeteria, library, exams, events, notifications, admin tools, and backend support.", "Code", LINKS["campus"]),
        item("Parallel Performance Analyzer Web App", "Python, Streamlit, Plotly, NumPy", "Analytics app evaluating Prefix Sum and Monte Carlo Integration performance with charts, experiments, and report-style outputs.", "Code", LINKS["parallel"]),
        item("ProCompiler Web App", "Python, Flask, Compiler Design", "Compiler construction project with web interface, lexer/parser logic for a C-like language, and documentation assets.", "Code", LINKS["compiler"]),
        item("3D Unity Beginner Game", "Unity, C#", "Unity platformer with player movement, jumping, coin collection, moving platforms, enemy collision, levels, and simple animations.", "Code", LINKS["unity"]),
        item("Portfolio Website", "React, Vite, Tailwind CSS", "Responsive developer portfolio with SEO files, project showcase, certificates, contact form, CV download, and Vercel deployment.", "Code", LINKS["portfolio_repo"]),
    ]

    story += section("Certificates")
    story += [
        item("Advanced Python Programming and Applications", "NAVTTC | A+ Grade | 26 Feb 2024 - 25 May 2024", "Prime Minister's Youth Skills Development Program at NFC Institute of Engineering and Technology Multan."),
    ]

    story += section("Skills")
    story.append(
        chips(
            [
                "Flutter",
                "Dart",
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "Firebase",
                "MongoDB",
                "Python",
                "Streamlit",
                "Plotly",
                "Unity",
                "C#",
                "Figma",
                "REST APIs",
            ]
        )
    )

    story += section("Career Goal")
    story.append(
        Paragraph(
            "Looking for internships, freelance opportunities, startup projects, and software collaborations where I can ship useful products and grow as a full stack and mobile app developer.",
            styles["Body"],
        )
    )

    doc.build(story)
    print(OUT)


if __name__ == "__main__":
    build()
