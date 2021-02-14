/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Reference for edit layout item
 */
export interface EditorRef {
    /**
     * Set option value in editor component
     * @param option Identifier of option
     * @param value New value of option
     */
    setOption: (option: string, value: unknown) => void;

    /**
     * Get option value from editor component
     * @param option Identifier of option
     * @returns Current value of option
     */
    getOption: (option: string) => unknown;

    /**
     * Trigger validation of editor
     * @returns true if validation of current value passes
     */
    validate: () => boolean;
}