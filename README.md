# Job Filing App

## Purpose of App
- Practice RESTful APIs
- Practice React environment
- Implement Drag and Drop
- Build a system that files, stores and tracks data for filing jobs.

## Schema of Database Tables

User Table
Columns: ID, FirstName, LastName, Email, Username, Password, SecurityQuestion1, SecurityAnswer1, SecurityQuestion2, SecurityAnswer2

Job Table
Columns: ID, JobTitle, URLListing, AppliedDate, AppliedTime, IsActive, CurrentOutcome, UserID (ForeignKey)

JobUpdate Table
Columsn: ID, UpdateType, UpdateDescription, UpdateDate, UpdateTime, CurrentOutcome, JobId, UserId

## More Descriptions to Come Upon Further Development