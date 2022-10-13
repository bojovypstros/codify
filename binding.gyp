{
  # NOTE: 'module_name' and 'module_path' come from the 'binary' property in package.json
  # node-pre-gyp handles passing them down to node-gyp when you build from source
  "targets": [
    {
      "target_name": "<(module_name)",
      "defines": ["NO_PNG"],
      "cflags": ["-Wno-sign-compare"],
      "xcode_settings": {
        "OTHER_CFLAGS": ["-Wno-sign-compare"]
      },
      "sources": [
        ".zint/backend/output.c",
        ".zint/backend/2of5.c",
        ".zint/backend/auspost.c",
        ".zint/backend/aztec.c",
        ".zint/backend/code.c",
        ".zint/backend/code1.c",
        ".zint/backend/code16k.c",
        ".zint/backend/code49.c",
        ".zint/backend/code128.c",
        ".zint/backend/common.c",
        ".zint/backend/composite.c",
        ".zint/backend/dmatrix.c",
        ".zint/backend/gridmtx.c",
        ".zint/backend/gs1.c",
        ".zint/backend/imail.c",
        ".zint/backend/large.c",
        ".zint/backend/library.c",
        ".zint/backend/maxicode.c",
        ".zint/backend/medical.c",
        ".zint/backend/pdf417.c",
        ".zint/backend/plessey.c",
        ".zint/backend/png.c",
        ".zint/backend/postal.c",
        ".zint/backend/ps.c",
        ".zint/backend/qr.c",
        ".zint/backend/reedsol.c",
        ".zint/backend/rss.c",
        ".zint/backend/svg.c",
        ".zint/backend/telepen.c",
        ".zint/backend/upcean.c",
        ".zint/backend/bmp.c",
        ".zint/backend/codablock.c",
        ".zint/backend/dotcode.c",
        ".zint/backend/eci.c",
        ".zint/backend/emf.c",
        ".zint/backend/general_field.c",
        ".zint/backend/gif.c",
        ".zint/backend/hanxin.c",
        ".zint/backend/mailmark.c",
        ".zint/backend/pcx.c",
        ".zint/backend/raster.c",
        ".zint/backend/tif.c",
        ".zint/backend/ultra.c",
        ".zint/backend/vector.c",
        "src/binding/main.cpp"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "msvs_settings": {
        "VCCLCompilerTool": {
          "AdditionalOptions": [
            "/w"
          ]
        }
      }
    },
    {
      "target_name": "action_after_build",
      "cflags": ["-Wno-sign-compare"],
      "type": "none",
      "dependencies": [ "<(module_name)" ],
      "copies": [
        {
          "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
          "destination": "<(module_path)"
        }
      ]
    }
  ]
}
