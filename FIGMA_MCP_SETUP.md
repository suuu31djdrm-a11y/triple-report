# Building Pages from Figma MCP

This project is set up to build pages from Figma using the **Figma MCP** (Model Context Protocol) server in Cursor.

## 1. Ensure Figma MCP is connected

The Figma MCP server must be running and connected in Cursor:

- **Check status**: Cursor Settings → **MCP** → find the Figma server. If it shows an error, fix the connection (see below).
- **Desktop server**: Install the [Figma desktop app](https://www.figma.com/downloads/) and use the [Figma MCP local/server setup](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/). The desktop server uses your **current selection** in Figma.
- **Remote server**: Configure the [remote Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) (e.g. `https://mcp.figma.com/mcp`). You’ll need to pass **file URL + node ID** when asking for design context (e.g. a link to a specific frame).

## 2. How to build a page from Figma

1. **In Figma**: Select the frame (or layer) you want to turn into a page.
2. **In Cursor**: Ask the agent, for example:
   - *“Build a page from my current Figma selection”* (desktop MCP), or  
   - *“Build a page from this Figma frame: [paste frame URL]”* (remote MCP).
3. The agent will use the Figma MCP tool **`get_design_context`** (and optionally **`get_metadata`**, **`get_screenshot`**) and generate React + Tailwind code.
4. New pages are added under **`src/pages/`** and wired in **`src/App.tsx`**.

## 3. Tech stack (aligned with Figma MCP)

- **React 18** + **TypeScript**
- **Tailwind CSS** (Figma MCP’s default styling)
- **Vite** for dev/build
- **React Router** for routes

So you can say things like “use my Figma selection” or “generate in React + Tailwind” and the agent will match this stack.

## 4. Optional: design system rules

To improve how designs are translated into code, you can create design-system rules:

- Ask the agent: *“Create design system rules for this project using the Figma MCP.”*
- The agent will run **`create_design_system_rules`** and save the result into `.cursor/rules/` so future generations follow your design tokens and patterns.

## 5. Optional: Code Connect

If you have Figma components that map to code components:

- **`get_code_connect_map`**: See existing Figma node → code component mappings.
- **`add_code_connect_map`**: Add new mappings so the agent reuses your components when generating from Figma.

---

**Quick start (app):**

```bash
npm install
npm run dev
```

Then open the app, and in Cursor ask to build a page from a Figma frame (with the Figma MCP server connected).
