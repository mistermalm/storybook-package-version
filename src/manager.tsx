import React from "react";
import { addons, types } from "storybook/internal/manager-api";
import { Version } from "./components/Version";
import { ADDON_ID, TOOL_ID } from "./constants";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register a tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: ADDON_ID,
    match: ({ tabId, viewMode }) => !tabId && (viewMode === 'docs' || viewMode === 'story'),
    render: () => <Version />,
  });
});