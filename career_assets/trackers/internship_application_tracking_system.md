# Internship Application Tracking System

Goal: maximize AI/ML internship interview opportunities through consistent applications, clean follow-ups, and recruiter-response tracking.

## Core Tracker Fields

- Company
- Role
- Applied Date
- Resume Version
- Portfolio Sent
- Recruiter Contact
- Status
- Interview Rounds
- Notes

Recommended extra fields:

- Job Link
- Location
- Source
- Priority
- Follow-Up Date
- Last Contact Date
- Next Action
- Project Angle

## Notion Version

Create a database named `AI/ML Internship Tracker`.

Properties:

| Property | Type | Options / Notes |
| --- | --- | --- |
| Company | Title | Company name |
| Role | Text | Role title |
| Applied Date | Date | Date applied |
| Resume Version | Select | AI/ML, NLP, CV, FastAPI, General |
| Portfolio Sent | Checkbox | Checked if sent |
| Recruiter Contact | Text | Name, LinkedIn, email |
| Status | Select | Target, Applied, Followed Up, Recruiter Replied, Interviewing, Offer, Rejected, Archived |
| Interview Rounds | Multi-select | Screening, Technical, Project Deep Dive, Behavioral, Final |
| Notes | Text | Context and next steps |
| Job Link | URL | Posting URL |
| Source | Select | LinkedIn, Wellfound, Company Site, Referral, Recruiter, Cold Email |
| Priority | Select | High, Medium, Low |
| Follow-Up Date | Date | Usually 5-7 business days after applying |
| Next Action | Select | Apply, Follow Up, Prepare, Send Portfolio, Wait, Close |
| Project Angle | Select | Lumina AI, MoodLens, AI Fitness Coach, General AI/ML |

Views:

1. `Today`
   - Filter: Next Action is Apply or Follow Up
   - Sort: Priority descending, Follow-Up Date ascending

2. `Applied This Week`
   - Filter: Applied Date is within past week

3. `Recruiter Follow-Ups`
   - Filter: Follow-Up Date is on or before today and Status is Applied

4. `Interview Pipeline`
   - Filter: Status is Interviewing or Recruiter Replied

5. `High Priority AI Startups`
   - Filter: Priority is High

## Excel Version

Use `internship_application_tracker.xlsx`.

Workbook tabs:

- `Dashboard`: summary and daily target
- `Applications`: main tracker
- `Recruiters`: contact log
- `Follow Ups`: message templates and queue
- `Strategy`: 10 roles/day workflow and weekly review
- `Lists`: dropdown values

Recommended use:

1. Add every opportunity to `Applications`.
2. Apply to 10 roles/day.
3. Mark `Portfolio Sent` as Yes when portfolio is included.
4. Set `Follow-Up Date` 5-7 business days later.
5. Update `Status` after every response.
6. Review `Dashboard` every evening.

## Google Sheets Version

Use either:

1. Import `internship_application_tracker.xlsx` into Google Drive and choose "Open with Google Sheets".
2. Import `google_sheets_import_template.csv` into a blank Google Sheet.

Suggested Google Sheets tabs:

- Applications
- Recruiters
- Follow Ups
- Strategy

Google Sheets setup:

- Freeze row 1
- Turn on filters
- Add dropdowns for Status, Resume Version, Priority, Source, Project Angle
- Use conditional colors:
  - Interviewing: blue
  - Recruiter Replied: green
  - Followed Up: yellow
  - Rejected: light red
  - Offer: dark green

## Applying to 10 Roles/Day

Daily operating system:

1. Find 15 roles.
2. Select the best 10.
3. Customize resume version:
   - NLP role: emphasize MoodLens and Lumina AI
   - Computer vision role: emphasize AI Fitness Coach
   - Backend AI role: emphasize FastAPI and Lumina AI
   - Generative AI role: emphasize Lumina AI and document summarization
4. Apply.
5. Save job link and recruiter info.
6. Send 3-5 targeted recruiter/founder messages.
7. Set follow-up date.
8. End the day by reviewing status changes.

Weekly target:

- 50 applications
- 15 recruiter/founder messages
- 5 follow-ups
- 2 project posts on LinkedIn

## Professional Follow-Up Templates

After applying:

```text
Hi [Name], I applied for the [Role] position at [Company]. I am a CS student and AI/ML developer building projects in document intelligence, transformer NLP, computer vision, and FastAPI.

My most relevant project for this role is [Project] because [specific connection].

I would be grateful if you could take a look at my application. Thank you.
```

After 5-7 business days:

```text
Hi [Name], I wanted to follow up on my application for the [Role] position. I remain very interested in the opportunity and would be happy to share my portfolio or discuss my AI/ML projects if useful.

Thank you for your time.
```

After recruiter response:

```text
Hi [Name], thank you for getting back to me. I would be happy to discuss the role further. I am available at [times], and I can also share a quick project walkthrough of Lumina AI, MoodLens, or AI Fitness Coach if helpful.
```

## Tracking Recruiter Responses

Use these response tags:

- Positive: recruiter asks for resume, portfolio, call, or availability
- Neutral: recruiter says they will review or forward
- No Response: no reply after 7 business days
- Not Now: no current role, but possible future contact
- Rejected: not moving forward

Rule:

- Follow up once after 5-7 business days.
- Follow up a second time only for high-priority companies.
- Do not spam recruiters.

## Weekly Review

Every Sunday:

- Count applications sent
- Count recruiter messages sent
- Count replies
- Count interviews
- Identify which project angle gets the most responses
- Improve resume bullets based on role patterns
- Pick 5 high-priority startups for deeper outreach
