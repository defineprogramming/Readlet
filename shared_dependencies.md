1. Exported Variables:
   - `user` (from "Readlet/api/users.js")
   - `books` (from "Readlet/api/books.js")
   - `reports` (from "Readlet/api/reports.js")
   - `moderationItems` (from "Readlet/api/moderation.js")

2. Data Schemas:
   - `UserSchema` (in "Readlet/api/users.js")
   - `BookSchema` (in "Readlet/api/books.js")
   - `ReportSchema` (in "Readlet/api/reports.js")
   - `ModerationSchema` (in "Readlet/api/moderation.js")

3. DOM Element IDs:
   - `loginForm` (in "Readlet/pages/login.js")
   - `registerForm` (in "Readlet/pages/register.js")
   - `uploadForm` (in "Readlet/pages/upload.js")
   - `bookList` (in "Readlet/pages/index.js")
   - `adminPanel` (in "Readlet/pages/admin.js")
   - `reportList` (in "Readlet/components/ReportList.js")
   - `moderationQueue` (in "Readlet/components/ModerationQueue.js")

4. Message Names:
   - `LOGIN_SUCCESS`
   - `LOGIN_FAILURE`
   - `REGISTER_SUCCESS`
   - `REGISTER_FAILURE`
   - `UPLOAD_SUCCESS`
   - `UPLOAD_FAILURE`
   - `CONVERSION_SUCCESS`
   - `CONVERSION_FAILURE`

5. Function Names:
   - `loginUser` (in "Readlet/api/auth.js")
   - `registerUser` (in "Readlet/api/auth.js")
   - `uploadBook` (in "Readlet/api/books.js")
   - `convertBook` (in "Readlet/utils/convert.js")
   - `getBooks` (in "Readlet/api/books.js")
   - `getReports` (in "Readlet/api/reports.js")
   - `getModerationItems` (in "Readlet/api/moderation.js")
   - `handleLogin` (in "Readlet/pages/login.js")
   - `handleRegister` (in "Readlet/pages/register.js")
   - `handleUpload` (in "Readlet/pages/upload.js")

6. Shared Dependencies:
   - `next` (in "Readlet/package.json")
   - `react` (in "Readlet/package.json")
   - `react-dom` (in "Readlet/package.json")
   - `mongodb` (in "Readlet/package.json")
   - `bcrypt` (in "Readlet/package.json")
   - `jsonwebtoken` (in "Readlet/package.json")
   - `next-auth` (in "Readlet/package.json")
   - `@fluentui/react` (in "Readlet/package.json")