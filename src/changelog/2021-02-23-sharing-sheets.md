---
title: Sharing Sheets
version: 0.10.0
date: 2021-02-23
featuredImage: ../images/changelog/2021-02-23.jpg
---

You can now share sheets with everyone at the table! To share a sheet, open the sheet's options menu by clicking the gear icon located at the top right of the sheet and selecting "Share with Table". This gives all players at the table the ability to view the sheet and edit it. Any player at a table can share a sheet. Shared sheets still belong to the person who shared it and will still live in that person's account. Please note that a sheet that is marked as private _and_ shared, will be viewable and editable by everyone at the table. Meaning that sharing a sheet ignores its privacy. This change now gives sheets three possible statuses at a table:

- **Public**: The sheet is viewable by everyone at the table and editable only by the owner. This is the default for any sheet added or created at a table.
- **Private**: The sheet is viewable and editable only by the owner.
- **Shared**: The sheet is viewable and editable by everyone at the table (even if it is marked as Private).

**NOTE: If two players edit a sheet at the same time, the person whose changes are submitted to the server first will override the other person's edits.** To help with this, shared sheets will have inputs highlighted when someone is editing it so you can be aware of any incoming changes. We've intentionally made the player making the edits anonymous so that this feature can support group safety tools such as Lines & Veils.

With this feature we have updated the UX around viewing/selecting sheets at the table. We have added an explicit dropdown located above the sheet panel. This dropdown will list all players that are part of the table plus a new option labeled "Table". Selecting this will show sheets that are shared.

Previously, you could select a player's sheets by clicking on the name in the header of any sheet. We have removed that functionality and have added showing the status of the sheet next to the player's name.

### Misc Improvements and Fixes

- You can now set a sheet as your Primary Sheet at a table. Primary Sheets load first and will be listed as your default sheet at the table. You can set this by opening the sheet's option menu and clicking "Set as Primary".
- If you select "Viewing Sheets" for a player with no sheets at the table, we now tell you they have no sheets instead of having the UI do nothing.
- Fixed being able to fully backspace out a modifier value and then typing. Previously, it would automatically become zero, making inserting negative numbers annoying.
- Fixed updating a modifier setting the correct new value for other players at the table.
- Fixed selecting a modifier sometimes causing numbers in the Dice Roller to output a string such as "0-4" or some other non-number combo.
- Fixed removing a sheet from other tables if it has been given to another player.
- Fixed a crash sometimes caused when trying to start your camera or microphone and then leaving the page.
- Fixed usernames wrapping oddly on the Dashboard.
