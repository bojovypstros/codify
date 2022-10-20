import OutputType from './types/enums/OutputType';
import SymbologyConfig from './types/SymbologyConfig';
import SymbologyResult from './types/SymbologyResult';
/**
 * Renders a symbology image as a string in SVG, EPS, or base64-encoded PNG format.
 *
 * @param {SymbologyConfig} config - symbology configuration
 * @param {string} barcodeData - data to encode
 * @param {OutputType} outputType - `png`, `eps`, or `svg`.
 * @returns {Promise<SymbologyResult>} object with resulting props (see docs)
 */
export declare function createStream(config: SymbologyConfig, barcodeData: string, outputType?: OutputType): Promise<SymbologyResult>;
/**
 * Creates a symbology image file of a PNG, SVG or EPS file in the specified `fileName` path.
 *
 * @param {SymbologyConfig} config - symbology configuration
 * @param {string} barcodeData - data to encode
 * @returns {Promise<SymbologyResult>} object with resulting props (see docs)
 */
export declare function createFile(config: SymbologyConfig, barcodeData: string): Promise<SymbologyResult>;
