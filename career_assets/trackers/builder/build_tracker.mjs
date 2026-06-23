import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = path.resolve("..");
const outputPath = path.join(root, "internship_application_tracker.xlsx");
const previewPath = path.join(root, "tracker_dashboard_preview.png");

const workbook = Workbook.create();

const sheets = {
  dashboard: workbook.worksheets.add("Dashboard"),
  applications: workbook.worksheets.add("Applications"),
  recruiters: workbook.worksheets.add("Recruiters"),
  followUps: workbook.worksheets.add("Follow Ups"),
  strategy: workbook.worksheets.add("Strategy"),
  lists: workbook.worksheets.add("Lists"),
};

const colors = {
  navy: "#0F172A",
  cyan: "#06B6D4",
  cyanDark: "#155E75",
  slate: "#E2E8F0",
  light: "#F8FAFC",
  muted: "#64748B",
  green: "#16A34A",
  amber: "#F59E0B",
  red: "#DC2626",
  border: "#CBD5E1",
  panel: "#ECFEFF",
};

function title(sheet, range, text, subtitle = "") {
  sheet.getRange(range).merge();
  sheet.getRange(range).values = [[text]];
  sheet.getRange(range).format = {
    fill: colors.navy,
    font: { bold: true, color: "#FFFFFF", size: 18 },
    horizontalAlignment: "left",
    verticalAlignment: "middle",
  };
  if (subtitle) {
    const row = Number(range.match(/\d+/)[0]) + 1;
    sheet.getRange(`A${row}:H${row}`).merge();
    sheet.getRange(`A${row}:H${row}`).values = [[subtitle]];
    sheet.getRange(`A${row}:H${row}`).format = {
      fill: colors.panel,
      font: { color: colors.cyanDark, italic: true },
      wrapText: true,
    };
  }
}

function styleHeader(range) {
  range.format = {
    fill: colors.cyanDark,
    font: { bold: true, color: "#FFFFFF" },
    horizontalAlignment: "center",
    verticalAlignment: "middle",
    wrapText: true,
  };
}

for (const sheet of Object.values(sheets)) {
  sheet.showGridLines = false;
}

// Lists
sheets.lists.getRange("A1:E1").values = [["Status", "Resume Version", "Priority", "Source", "Project Angle"]];
styleHeader(sheets.lists.getRange("A1:E1"));
sheets.lists.getRange("A2:A9").values = [
  ["Target"],
  ["Applied"],
  ["Followed Up"],
  ["Recruiter Replied"],
  ["Interviewing"],
  ["Offer"],
  ["Rejected"],
  ["Archived"],
];
sheets.lists.getRange("B2:B6").values = [["AI/ML"], ["NLP"], ["CV"], ["FastAPI"], ["General"]];
sheets.lists.getRange("C2:C4").values = [["High"], ["Medium"], ["Low"]];
sheets.lists.getRange("D2:D7").values = [["LinkedIn"], ["Wellfound"], ["Company Site"], ["Referral"], ["Recruiter"], ["Cold Email"]];
sheets.lists.getRange("E2:E6").values = [["Lumina AI"], ["MoodLens"], ["AI Fitness Coach"], ["General AI/ML"], ["FastAPI Backend"]];
sheets.lists.getRange("A:E").format.autofitColumns();

// Applications
title(
  sheets.applications,
  "A1:Q1",
  "AI/ML Internship Applications",
  "Track every opportunity, project angle, recruiter contact, follow-up, and interview status."
);
const appHeaders = [
  "Company",
  "Role",
  "Applied Date",
  "Resume Version",
  "Portfolio Sent",
  "Recruiter Contact",
  "Status",
  "Interview Rounds",
  "Notes",
  "Job Link",
  "Location",
  "Source",
  "Priority",
  "Follow-Up Date",
  "Last Contact Date",
  "Next Action",
  "Project Angle",
];
sheets.applications.getRange("A4:Q4").values = [appHeaders];
styleHeader(sheets.applications.getRange("A4:Q4"));
const applicationRows = [
  [
    "Example AI Startup",
    "AI/ML Intern",
    new Date("2026-06-22"),
    "AI/ML",
    "Yes",
    "Jane Recruiter - LinkedIn",
    "Applied",
    "None",
    "Customize follow-up around Lumina AI document intelligence.",
    "https://example.com/job",
    "Remote",
    "LinkedIn",
    "High",
    new Date("2026-06-29"),
    new Date("2026-06-22"),
    "Follow Up",
    "Lumina AI",
  ],
  [
    "Vision Health AI",
    "Computer Vision Intern",
    new Date("2026-06-22"),
    "CV",
    "Yes",
    "Founder on LinkedIn",
    "Target",
    "None",
    "Apply with AI Fitness Coach angle.",
    "https://example.com/job",
    "Hybrid",
    "Company Site",
    "High",
    new Date("2026-06-29"),
    null,
    "Apply",
    "AI Fitness Coach",
  ],
  [
    "NLP Tools Lab",
    "NLP Intern",
    new Date("2026-06-22"),
    "NLP",
    "No",
    "",
    "Target",
    "None",
    "Use MoodLens and Lumina AI examples.",
    "https://example.com/job",
    "Remote",
    "Wellfound",
    "Medium",
    new Date("2026-06-29"),
    null,
    "Apply",
    "MoodLens",
  ],
];
sheets.applications.getRange("A5:Q7").values = applicationRows;
sheets.applications.getRange("A4:Q104").format.borders = { preset: "outside", style: "thin", color: colors.border };
sheets.applications.getRange("C5:C104").setNumberFormat("yyyy-mm-dd");
sheets.applications.getRange("N5:O104").setNumberFormat("yyyy-mm-dd");
sheets.applications.getRange("I5:I104").format.wrapText = true;
sheets.applications.getRange("A:Q").format.autofitColumns();
sheets.applications.getRange("I:I").format.columnWidth = 34;
sheets.applications.getRange("J:J").format.columnWidth = 28;
sheets.applications.freezePanes.freezeRows(4);
sheets.applications.tables.add("A4:Q104", true, "ApplicationsTable");

// Recruiters
title(sheets.recruiters, "A1:H1", "Recruiter Contact Log", "Keep outreach personal, specific, and respectful.");
const recruiterHeaders = ["Name", "Company", "LinkedIn / Email", "Role Focus", "Last Contact Date", "Response", "Next Step", "Notes"];
sheets.recruiters.getRange("A4:H4").values = [recruiterHeaders];
styleHeader(sheets.recruiters.getRange("A4:H4"));
sheets.recruiters.getRange("A5:H7").values = [
  ["Jane Recruiter", "Example AI Startup", "linkedin.com/in/example", "AI/ML Intern", new Date("2026-06-22"), "No Response", "Follow Up", "Mention Lumina AI."],
  ["Founder Name", "Vision Health AI", "linkedin.com/in/founder", "Computer Vision", null, "Not Contacted", "Send Intro", "Mention AI Fitness Coach."],
  ["Talent Team", "NLP Tools Lab", "careers@example.com", "NLP", null, "Not Contacted", "Apply First", "Mention MoodLens."],
];
sheets.recruiters.getRange("E5:E104").setNumberFormat("yyyy-mm-dd");
sheets.recruiters.getRange("A:H").format.autofitColumns();
sheets.recruiters.getRange("H:H").format.columnWidth = 32;
sheets.recruiters.freezePanes.freezeRows(4);
sheets.recruiters.tables.add("A4:H104", true, "RecruitersTable");

// Follow ups
title(sheets.followUps, "A1:H1", "Follow-Up Queue and Templates", "Use one professional follow-up after 5-7 business days.");
sheets.followUps.getRange("A4:H4").values = [["Company", "Role", "Contact", "Follow-Up Date", "Status", "Message Type", "Template", "Sent?"]];
styleHeader(sheets.followUps.getRange("A4:H4"));
sheets.followUps.getRange("A5:H7").values = [
  ["Example AI Startup", "AI/ML Intern", "Jane Recruiter", new Date("2026-06-29"), "Applied", "First Follow-Up", "Hi [Name], I wanted to follow up on my application for [Role]. I remain very interested and would be happy to share my portfolio.", "No"],
  ["Vision Health AI", "Computer Vision Intern", "Founder", new Date("2026-06-29"), "Target", "Intro", "Hi [Name], I am building AI Fitness Coach with OpenCV and MediaPipe and noticed your work in vision health AI.", "No"],
  ["NLP Tools Lab", "NLP Intern", "Talent Team", new Date("2026-06-29"), "Target", "Application Note", "Hi [Name], my MoodLens project focuses on transformer-based emotion and sarcasm detection, which connects closely to this NLP role.", "No"],
];
sheets.followUps.getRange("D5:D104").setNumberFormat("yyyy-mm-dd");
sheets.followUps.getRange("G:G").format.columnWidth = 58;
sheets.followUps.getRange("G5:G104").format.wrapText = true;
sheets.followUps.getRange("A:H").format.autofitColumns();
sheets.followUps.freezePanes.freezeRows(4);
sheets.followUps.tables.add("A4:H104", true, "FollowUpsTable");

// Strategy
title(sheets.strategy, "A1:H1", "10 Roles/Day Internship Strategy", "A repeatable process for outreach, applications, and weekly review.");
sheets.strategy.getRange("A4:B13").values = [
  ["Daily Target", "10 applications"],
  ["Role Search", "Find 15, apply to the best 10"],
  ["Resume Match", "AI/ML, NLP, CV, FastAPI, or General"],
  ["Portfolio Rule", "Send portfolio for every relevant AI/ML role"],
  ["Outreach", "3-5 recruiter/founder messages per day"],
  ["Follow-Up", "5-7 business days after applying"],
  ["Weekly Target", "50 applications, 15 outreach messages, 5 follow-ups"],
  ["Best NLP Angle", "MoodLens and Lumina AI"],
  ["Best CV Angle", "AI Fitness Coach"],
  ["Best Backend AI Angle", "Lumina AI and FastAPI"],
];
styleHeader(sheets.strategy.getRange("A4:B4"));
sheets.strategy.getRange("A:B").format.autofitColumns();
sheets.strategy.getRange("B:B").format.columnWidth = 48;
sheets.strategy.getRange("B4:B13").format.wrapText = true;

// Dashboard
title(sheets.dashboard, "A1:H1", "AI/ML Internship Pipeline Dashboard", "Use this sheet every evening to check volume, follow-ups, and interview momentum.");
sheets.dashboard.getRange("A4:B11").values = [
  ["Metric", "Value"],
  ["Total Applications", null],
  ["Applied", null],
  ["Interviewing", null],
  ["Recruiter Replied", null],
  ["Offers", null],
  ["Follow-Ups Due", null],
  ["Daily Application Goal", 10],
];
styleHeader(sheets.dashboard.getRange("A4:B4"));
sheets.dashboard.getRange("B5:B10").formulas = [
  ['=COUNTA(Applications!A5:A104)'],
  ['=COUNTIF(Applications!G5:G104,"Applied")'],
  ['=COUNTIF(Applications!G5:G104,"Interviewing")'],
  ['=COUNTIF(Applications!G5:G104,"Recruiter Replied")'],
  ['=COUNTIF(Applications!G5:G104,"Offer")'],
  ['=COUNTIFS(Applications!N5:N104,"<="&TODAY(),Applications!G5:G104,"Applied")'],
];
sheets.dashboard.getRange("D4:E12").values = [
  ["Resume Version Guide", "Best Project Angle"],
  ["AI/ML", "General ML + all projects"],
  ["NLP", "MoodLens + Lumina AI"],
  ["CV", "AI Fitness Coach"],
  ["FastAPI", "Lumina AI backend + APIs"],
  ["General", "Portfolio + strongest project"],
  ["", ""],
  ["Follow-Up Rule", "One message after 5-7 business days. Be specific, polite, and brief."],
  ["Weekly Review", "Count applications, replies, interviews, and strongest project angle."],
];
styleHeader(sheets.dashboard.getRange("D4:E4"));
sheets.dashboard.getRange("D4:E12").format.borders = { preset: "outside", style: "thin", color: colors.border };
sheets.dashboard.getRange("A4:B11").format.borders = { preset: "outside", style: "thin", color: colors.border };
sheets.dashboard.getRange("A:A").format.columnWidth = 26;
sheets.dashboard.getRange("B:B").format.columnWidth = 18;
sheets.dashboard.getRange("D:D").format.columnWidth = 22;
sheets.dashboard.getRange("E:E").format.columnWidth = 52;
sheets.dashboard.getRange("D5:E12").format.wrapText = true;

// Data validation
sheets.applications.getRange("D5:D104").dataValidation = { rule: { type: "list", formula1: "Lists!$B$2:$B$6" } };
sheets.applications.getRange("E5:E104").dataValidation = { rule: { type: "list", values: ["Yes", "No"] } };
sheets.applications.getRange("G5:G104").dataValidation = { rule: { type: "list", formula1: "Lists!$A$2:$A$9" } };
sheets.applications.getRange("L5:L104").dataValidation = { rule: { type: "list", formula1: "Lists!$D$2:$D$7" } };
sheets.applications.getRange("M5:M104").dataValidation = { rule: { type: "list", formula1: "Lists!$C$2:$C$4" } };
sheets.applications.getRange("Q5:Q104").dataValidation = { rule: { type: "list", formula1: "Lists!$E$2:$E$6" } };

// Visual finishing
for (const sheet of Object.values(sheets)) {
  sheet.getUsedRange()?.format.autofitRows();
}

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "formula error scan",
});
console.log(errors.ndjson);

const dashboard = await workbook.inspect({
  kind: "table",
  sheetId: "Dashboard",
  range: "A4:B11",
  include: "values,formulas",
  tableMaxRows: 10,
  tableMaxCols: 3,
});
console.log(dashboard.ndjson);

const preview = await workbook.render({
  sheetName: "Dashboard",
  autoCrop: "all",
  scale: 1,
  format: "png",
});
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

console.log(`Saved ${outputPath}`);
console.log(`Preview ${previewPath}`);
