import SymbologyType from './types/enums/SymbologyType';
import DataMatrix from './types/enums/DataMatrix';
import EncodingMode from './types/enums/EncodingMode';
import OutputOption from './types/enums/OutputOption';
import OutputType from './types/enums/OutputType';
import { createStream, createFile } from './main';
export { default as SymbologyType } from './types/enums/SymbologyType';
export { default as DataMatrix } from './types/enums/DataMatrix';
export { default as EncodingMode } from './types/enums/EncodingMode';
export { default as OutputOption } from './types/enums/OutputOption';
export { default as OutputType } from './types/enums/OutputType';
export { default as SymbologyConfig } from './types/SymbologyConfig';
export { default as SymbologyResult } from './types/SymbologyResult';
export { createStream, createFile } from './main';
declare const _default: {
    DataMatrix: typeof DataMatrix;
    EncodingMode: typeof EncodingMode;
    OutputOption: typeof OutputOption;
    OutputType: typeof OutputType;
    SymbologyType: typeof SymbologyType;
    createStream: typeof createStream;
    createFile: typeof createFile;
    /** Legacy support - remove in next major release */
    Encoding: typeof EncodingMode;
    Output: typeof OutputOption;
    Barcode: typeof SymbologyType;
};
export default _default;
