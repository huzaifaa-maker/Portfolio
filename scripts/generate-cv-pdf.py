from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Image,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "Huzaifa-Altaf-CV.pdf"
PHOTO = ROOT / "public" / "assets" / "huzaifa-cv-photo.jpeg"


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="Name",
        fontName="Helvetica-Bold",
        fontSize=26,
        leading=30,
        textColor=colors.white,
        spaceAfter=5,
    )
)
styles.add(
    ParagraphStyle(
        name="Role",
        fontName="Helvetica",
        fontSize=11,
        leading=15,
        textColor=colors.HexColor("#DBEAFE"),
    )
)
styles.add(
    ParagraphStyle(
        name="Contact",
        fontName="Helvetica",
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#EFF6FF"),
    )
)
styles.add(
    ParagraphStyle(
        name="SectionTitle",
        fontName="Helvetica-Bold",
        fontSize=13,
        leading=16,
        textColor=colors.HexColor("#1D4ED8"),
        spaceBefore=9,
        spaceAfter=7,
    )
)
styles.add(
    ParagraphStyle(
        name="ItemTitle",
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        textColor=colors.HexColor("#111827"),
        spaceAfter=2,
    )
)
styles.add(
    ParagraphStyle(
        name="Body",
        fontName="Helvetica",
        fontSize=9.2,
        leading=13.2,
        textColor=colors.HexColor("#374151"),
    )
)
styles.add(
    ParagraphStyle(
        name="Small",
        fontName="Helvetica",
        fontSize=8.4,
        leading=12,
        textColor=colors.HexColor("#4B5563"),
    )
)
styles.add(
    ParagraphStyle(
        name="Chip",
        fontName="Helvetica-Bold",
        fontSize=8,
        leading=11,
        textColor=colors.HexColor("#1D4ED8"),
        alignment=1,
    )
)


def section(title):
    return [
        Paragraph(title, styles["SectionTitle"]),
        Table([[""]], colWidths=[170 * mm], rowHeights=[0.8], style=TableStyle([("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#2563EB"))])),
        Spacer(1, 5),
    ]


def item(title, meta, body):
    return KeepTogether(
        [
            Paragraph(title, styles["ItemTitle"]),
            Paragraph(meta, styles["Small"]),
            Paragraph(body, styles["Body"]),
            Spacer(1, 6),
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
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#EFF6FF")),
                ("BOX", (0, 0), (-1, -1), 0.4, colors.HexColor("#BFDBFE")),
                ("INNERGRID", (0, 0), (-1, -1), 2, colors.white),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    return table


def header():
    photo = Image(str(PHOTO), width=30 * mm, height=30 * mm)
    text = [
        Paragraph("Huzaifa Altaf", styles["Name"]),
        Paragraph("Full Stack Developer | Flutter App Developer | CS Student", styles["Role"]),
        Spacer(1, 5),
        Paragraph("Email: huzaifaltaf15@icloud.com | WhatsApp: +92 319 5639447", styles["Contact"]),
        Paragraph("GitHub: github.com/huzaifaa-maker | LinkedIn: linkedin.com/in/huzaifa-altaf-45227527b", styles["Contact"]),
        Paragraph("Instagram: instagram.com/huxaifa.here | Fiverr: fiverr.com/pe/Dx5QwX", styles["Contact"]),
    ]
    table = Table([[photo, text]], colWidths=[38 * mm, 132 * mm])
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#1D4ED8")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 12),
                ("RIGHTPADDING", (0, 0), (-1, -1), 12),
                ("TOPPADDING", (0, 0), (-1, -1), 14),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 14),
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
        topMargin=18 * mm,
        bottomMargin=16 * mm,
        title="Huzaifa Altaf CV",
        author="Huzaifa Altaf",
    )

    story = [header(), Spacer(1, 10)]

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
    projects = [
        ("Rental Management System", "Flutter, Firebase, Node.js, MongoDB", "Rental operations app with dashboards, properties, tenants, rent payments, bills, maintenance, leases, API integration, and exhibition presentation."),
        ("Campus Helper App", "Flutter, Firebase, Node.js, MongoDB", "Campus assistant with authentication, chat, marketplace, cafeteria, library, exams, events, notifications, admin tools, and backend support."),
        ("Parallel Performance Analyzer", "Python, Streamlit, Plotly, NumPy", "Analytics app evaluating Prefix Sum and Monte Carlo Integration performance with charts, experiments, and report-style outputs."),
        ("ProCompiler", "Python, Flask, Compiler Design", "Compiler construction project with web interface, lexer/parser logic for a C-like language, and documentation assets."),
        ("3D Unity Beginner Game", "Unity, C#", "Unity platformer with player movement, jumping, coin collection, moving platforms, enemy collision, levels, and simple animations."),
    ]
    for title, meta, body in projects:
        story.append(item(title, meta, body))

    story += section("Exhibition")
    story.append(
        Paragraph(
            "Presented the Rental Management System at an exhibition in Air University Multan, demonstrating the app workflow, dashboard screens, poster context, and rental operations use case to visitors and evaluators.",
            styles["Body"],
        )
    )

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

    story += section("Certificates")
    story += [
        item("Advanced Python Programming and Applications", "NAVTTC | A+ Grade | 26 Feb 2024 - 25 May 2024", "Prime Minister's Youth Skills Development Program at NFC Institute of Engineering and Technology Multan."),
        item("Class Representative Award Certificate", "NFC Institute of Engineering and Technology Multan | Sept 2024 - June 2025", "Awarded for exceptional service as class representative of the Computer Science section."),
    ]

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
