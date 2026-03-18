# Changelog

## [Unreleased]
### SwiftCRM Rebrand & Initial CRM Features (2026-05-23)
- Rebranded all content, navigation, and landing page to "SwiftCRM" with new value prop, owner info (Chirag Dodiya), and domain-specific copy.
- Updated global navbar and dashboard sidebar; added "Contacts" and "Companies" nav for CRM.
- **Data Layer:** Introduced `contacts` and `companies` tables in Drizzle schema, with new migration and updated migration journal.
- **Contacts:** Implemented end-to-end CRUD for contacts: add, update, delete, team-scoped access, modal dialogs, forms, and table listing.
- **Companies:** Implemented end-to-end CRUD for companies: add, update, delete, team-scoped access, modal dialogs, forms, and table listing.
- All flows are live, production-grade, ready for real internal CRM use.
- Contact forms and sales inquiry now direct to hi@chirag.co.