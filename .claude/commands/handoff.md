Prep this conversation for a clean handoff to a fresh chat. Do this proactively when context feels ~70% full (before auto-compaction decides for you).

Steps:
1. Update `TODO.md`: what shipped this session, any decisions waiting on DJ, and the NEXT task(s) in order.
2. Update the "Active work" line in `CLAUDE.md`.
3. Push any durable cross-session *facts* (not tasks) to memory.
4. Commit + push the doc changes (so the fresh chat reads them).
5. Output a tight **kickoff prompt** in a copy-paste code block for the new chat: working dir, "read CLAUDE.md, TODO.md, HANDOFF.md, CSS-MAP.md first," a one-line current state, and the immediate next task.

Goal: the new chat is as productive as this one from message 1.
