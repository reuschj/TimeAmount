"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TimeAmount_1 = __importDefault(require("./src/TimeAmount"));
exports.TimeAmount = TimeAmount_1.default;
var TimeUnit_1 = __importStar(require("./src/TimeUnit"));
exports.TimeUnit = TimeUnit_1.default;
exports.getConversionValue = TimeUnit_1.getConversionValue;
exports.getTimeUnitPosition = TimeUnit_1.getTimeUnitPosition;
exports.getTimeUnitFromPosition = TimeUnit_1.getTimeUnitFromPosition;
exports.getPreviousTimeUnit = TimeUnit_1.getPreviousTimeUnit;
exports.getNextTimeUnit = TimeUnit_1.getNextTimeUnit;
var TimeDescriptionSetup_1 = require("./src/TimeDescriptionSetup");
exports.defaultTemplateCreator = TimeDescriptionSetup_1.defaultTemplateCreator;
