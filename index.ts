import SymbologyType from './src/types/enums/SymbologyType'
import DataMatrix from './src/types/enums/DataMatrix'
import EncodingMode from './src/types/enums/EncodingMode'
import OutputOption from './src/types/enums/OutputOption'
import OutputType from './src/types/enums/OutputType'
import { createStream, createFile } from './src/main'

export { default as SymbologyType } from './src/types/enums/SymbologyType'
export { default as DataMatrix } from './src/types/enums/DataMatrix'
export { default as EncodingMode } from './src/types/enums/EncodingMode'
export { default as OutputOption } from './src/types/enums/OutputOption'
export { default as OutputType } from './src/types/enums/OutputType'
export { default as SymbologyConfig } from './src/types/SymbologyConfig'
export { default as SymbologyResult } from './src/types/SymbologyResult'
export { createStream, createFile } from './src/main'

export default {
  DataMatrix,
  EncodingMode,
  OutputOption,
  OutputType,
  SymbologyType,
  createStream,
  createFile,
}
