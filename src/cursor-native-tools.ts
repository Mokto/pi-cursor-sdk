import { parseEnvBoolean } from "./cursor-env-boolean.js";

export const CURSOR_NATIVE_TOOLS_ENV = "PI_CURSOR_NATIVE_TOOLS";

/** Default preserves the SDK toolset; false selects the public MCP-only main loop. */
export function resolveCursorNativeToolsEnabled(env: Record<string, string | undefined> = process.env): boolean {
	return parseEnvBoolean(env[CURSOR_NATIVE_TOOLS_ENV], true);
}

export function assertCursorNativeToolsRuntime(runtime: "local" | "cloud", nativeToolsEnabled: boolean): void {
	if (runtime === "cloud" && !nativeToolsEnabled) {
		throw new Error("PI_CURSOR_NATIVE_TOOLS=0 requires local runtime; Cursor Cloud does not support the SDK tools restriction. Select local runtime or remove the opt-out.");
	}
}
