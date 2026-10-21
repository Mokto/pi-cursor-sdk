import { describe, expect, it } from "vitest";
import { resolveCursorNativeToolsEnabled } from "../src/cursor-native-tools.js";

describe("native tool surface environment", () => {
	it.each([undefined, "", "  ", "unknown", "1", "TRUE", "on", "yes", "enabled"])("preserves the default for %s", value => {
		expect(resolveCursorNativeToolsEnabled({ PI_CURSOR_NATIVE_TOOLS: value })).toBe(true);
	});
	it.each(["0", "false", " OFF ", "none", "no", "disabled"])("selects MCP-only for %s", value => {
		expect(resolveCursorNativeToolsEnabled({ PI_CURSOR_NATIVE_TOOLS: value })).toBe(false);
	});
});
