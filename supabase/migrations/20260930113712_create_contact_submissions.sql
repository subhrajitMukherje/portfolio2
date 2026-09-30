/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `project_type` (text, not null) — type of project (Automation, SaaS Dev, E-commerce, LMS, Hourly)
  - `budget_range` (text, not null) — selected budget tier
  - `message` (text, not null) — project details / inquiry
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public contact form, no login required).
- No SELECT/UPDATE/DELETE for anon — submissions are private to the site owner.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget_range text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
