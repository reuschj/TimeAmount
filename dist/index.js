"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTemplateCreator = exports.getNextTimeUnit = exports.getPreviousTimeUnit = exports.getTimeUnitFromPosition = exports.getTimeUnitPosition = exports.getConversionValue = exports.TimeUnit = exports.TimeAmount = void 0;
var TimeAmount_1 = __importDefault(require("./src/TimeAmount"));
exports.TimeAmount = TimeAmount_1.default;
var TimeUnit_1 = __importStar(require("./src/TimeUnit"));
exports.TimeUnit = TimeUnit_1.default;
Object.defineProperty(exports, "getConversionValue", { enumerable: true, get: function () { return TimeUnit_1.getConversionValue; } });
Object.defineProperty(exports, "getTimeUnitPosition", { enumerable: true, get: function () { return TimeUnit_1.getTimeUnitPosition; } });
Object.defineProperty(exports, "getTimeUnitFromPosition", { enumerable: true, get: function () { return TimeUnit_1.getTimeUnitFromPosition; } });
Object.defineProperty(exports, "getPreviousTimeUnit", { enumerable: true, get: function () { return TimeUnit_1.getPreviousTimeUnit; } });
Object.defineProperty(exports, "getNextTimeUnit", { enumerable: true, get: function () { return TimeUnit_1.getNextTimeUnit; } });
var TimeDescriptionSetup_1 = require("./src/TimeDescriptionSetup");
Object.defineProperty(exports, "defaultTemplateCreator", { enumerable: true, get: function () { return TimeDescriptionSetup_1.defaultTemplateCreator; } });
