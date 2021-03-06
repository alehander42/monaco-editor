/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
import { createDecorator } from '../../../platform/instantiation/common/instantiation.js';
export var IModelService = createDecorator('modelService');
export function shouldSynchronizeModel(model) {
    return (!model.isTooLargeForHavingARichMode() && !model.isForSimpleWidget);
}
