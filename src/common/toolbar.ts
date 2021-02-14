/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

/**
 * Reference of toolbar item
 */
export interface ToolbarItemRef {
    /**
     * Set option value of toolbar item component
     * @param option Identifier of option
     * @param value New value of option
     */
    setOption: (option: string, value: unknown) => void;

    /**
     * Get option value of toolbar item component
     * @param option Identifier of option
     */
    getOption: (option: string) => any;
}