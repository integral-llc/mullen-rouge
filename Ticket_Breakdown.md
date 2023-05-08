# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
### Ticket 1: Add custom Agent ID field to the database
---
**Description:** Update the database schema to add a new field `custom_agent_id` in the Agents table to store custom IDs for each Agent assigned by the Facilities.

**Acceptance Criteria:**
- A new column `custom_agent_id` is added to the Agents table.
- The `custom_agent_id` can be a nullable field, allowing Agents without custom IDs to still be stored.
- Test the database schema update and verify the successful addition of the new field.

**Time Estimate:** 2-3 hours

**Implementation Details:**
- Update the database schema and migration files to include the new `custom_agent_id` field.
- Update any relevant model classes for the Agents table to include the new field.
- Test the schema update by inserting sample data with and without custom Agent IDs.

---

### Ticket 2: Update Facility Agent Management Interface
---
**Description:** Update the Facility Agent Management Interface to allow Facilities to add, update, or remove custom Agent IDs for each Agent they work with.

**Acceptance Criteria:**
- The Facility Agent Management Interface displays the custom Agent ID field for each Agent.
- Facilities can add, edit, or remove custom Agent IDs for the Agents they work with.
- Changes made to custom Agent IDs are successfully saved in the database.

**Time Estimate:** 4-6 hours

**Implementation Details:**
- Update the Facility Agent Management Interface to include a new input field for custom Agent IDs.
- Add validation for the custom Agent ID input field (e.g., length, allowed characters).
- Implement functionality for adding, updating, or removing custom Agent IDs and saving changes to the database.

---

### Ticket 3: Update `getShiftsByFacility` function
---
**Description:** Modify the `getShiftsByFacility` function to return custom Agent IDs (if available) along with other metadata about the assigned Agent for each Shift.

**Acceptance Criteria:**
- The `getShiftsByFacility` function returns custom Agent IDs along with other Agent metadata.
- If a custom Agent ID is not available, the function returns the internal database ID for the Agent.
- Existing functionality of the `getShiftsByFacility` function remains unaffected.

**Time Estimate:** 2-3 hours

**Implementation Details:**
- Update the `getShiftsByFacility` function to include custom Agent IDs in the returned Agent metadata.
- Modify the SQL query or ORM code to fetch custom Agent IDs from the Agents table.
- Test the updated function to ensure custom Agent IDs are returned correctly and existing functionality remains unaffected.

---

### Ticket 4: Update `generateReport` function
---
**Description:** Modify the `generateReport` function to display the custom Agent IDs (if available) for each Agent on the generated report, replacing the internal database IDs.

**Acceptance Criteria:**
- The generated report displays custom Agent IDs instead of internal database IDs (if available).
- If custom Agent IDs are not available, the report displays the internal database ID for each Agent.
- Existing functionality of the `generateReport` function remains unaffected.

**Time Estimate:** 3-4 hours

**Implementation Details:**
- Update the `generateReport` function to use custom Agent IDs from the Shifts data provided.
- Modify the PDF generation code to display custom Agent IDs instead of internal database IDs (if available).
- Test the updated function with various input data to ensure custom Agent IDs are displayed correctly and existing functionality remains unaffected.

---

### Ticket 5: Update documentation and write test cases
---
**Description:** Update documentation for the new custom Agent ID feature and write test cases to ensure it functions as expected.

**Acceptance Criteria:**
- Updated documentation reflects the changes made in the previous tickets and clearly explains the new custom Agent ID feature.
- Test cases are written for each ticket, covering different scenarios and ensuring the custom Agent ID feature works as expected.
- Test cases pass successfully, and any issues found during testing are addressed and resolved.

**Time Estimate:** 3-4 hours

**Implementation Details:**
- Update existing documentation, including API references, user guides, and code comments, to incorporate the new custom Agent ID feature.
- Write test cases for each ticket, ensuring they cover a range of scenarios, including edge cases and potential error situations.
- Run the test cases and address any issues found during testing to ensure the custom Agent ID feature is working as expected.