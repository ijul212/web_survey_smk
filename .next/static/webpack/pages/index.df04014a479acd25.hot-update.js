/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Validation/validation.js":
/*!****************************************!*\
  !*** ./pages/Validation/validation.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("function validateForm() {\n    let isValid = true;\n    // Clear previous error messages\n    document.querySelectorAll(\".error-message\").forEach((el)=>el.textContent = \"\");\n    document.querySelectorAll(\"input, select, textarea\").forEach((el)=>el.classList.remove(\"error\"));\n    // Validate NISN\n    const nisn = document.getElementById(\"nisn\");\n    if (!nisn.value.match(/^[0-9]+$/)) {\n        isValid = false;\n        nisn.classList.add(\"error\");\n        document.getElementById(\"nisnError\").textContent = \"NISN hanya boleh diisi dengan angka.\";\n    }\n    // Validate Nama Siswa\n    const namaSiswa = document.getElementById(\"nama_siswa\");\n    if (namaSiswa.value.trim() === \"\") {\n        isValid = false;\n        namaSiswa.classList.add(\"error\");\n        document.getElementById(\"namaSiswaError\").textContent = \"Nama lengkap wajib diisi.\";\n    }\n    // Validate Tanggal Lahir\n    const tanggalLahir = document.getElementById(\"tanggal_lahir\");\n    if (tanggalLahir.value === \"\") {\n        isValid = false;\n        tanggalLahir.classList.add(\"error\");\n        document.getElementById(\"tanggalLahirError\").textContent = \"Tanggal lahir wajib diisi.\";\n    }\n    // Validate Jenis Kelamin\n    const jenisKelamin = document.getElementById(\"jenis_kelamin\");\n    if (jenisKelamin.value === \"\") {\n        isValid = false;\n        jenisKelamin.classList.add(\"error\");\n        document.getElementById(\"jenisKelaminError\").textContent = \"Jenis kelamin wajib dipilih.\";\n    }\n    // Validate NPSN\n    const npsn = document.getElementById(\"npsn\");\n    if (!npsn.value.match(/^[0-9]+$/)) {\n        isValid = false;\n        npsn.classList.add(\"error\");\n        document.getElementById(\"npsnError\").textContent = \"NPSN hanya boleh diisi dengan angka.\";\n    }\n    // Validate Asal Sekolah\n    const asalSekolah = document.getElementById(\"asal_sekolah\");\n    if (asalSekolah.value.trim() === \"\") {\n        isValid = false;\n        asalSekolah.classList.add(\"error\");\n        document.getElementById(\"asalSekolahError\").textContent = \"Asal sekolah wajib diisi.\";\n    }\n    // Validate Jurusan\n    const jurusan = document.getElementById(\"jurusan\");\n    if (jurusan.value === \"\") {\n        isValid = false;\n        jurusan.classList.add(\"error\");\n        document.getElementById(\"jurusanError\").textContent = \"Jurusan wajib dipilih.\";\n    }\n    // Validate Kota/Kabupaten\n    const kotaKabupaten = document.getElementById(\"kota_kabupaten\");\n    if (kotaKabupaten.value === \"\") {\n        isValid = false;\n        kotaKabupaten.classList.add(\"error\");\n        document.getElementById(\"kotaKabupatenError\").textContent = \"Kota/Kabupaten wajib dipilih.\";\n    }\n    // Validate Alamat Rumah\n    const alamatRumah = document.querySelector('textarea[name=\"alamat_rumah\"]');\n    if (alamatRumah.value.trim() === \"\") {\n        isValid = false;\n        alamatRumah.classList.add(\"error\");\n        document.getElementById(\"alamatRumahError\").textContent = \"Alamat rumah wajib diisi.\";\n    }\n    // Validate Nomor Handphone\n    const nomorHandphone = document.getElementById(\"nomor_handphone\");\n    if (!nomorHandphone.value.match(/^[0-9]+$/)) {\n        isValid = false;\n        nomorHandphone.classList.add(\"error\");\n        document.getElementById(\"nomorHandphoneError\").textContent = \"Nomor handphone hanya boleh diisi dengan angka.\";\n    }\n    // Validate Email\n    const email = document.getElementById(\"email\");\n    if (!email.value.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {\n        isValid = false;\n        email.classList.add(\"error\");\n        document.getElementById(\"emailError\").textContent = \"Email tidak valid.\";\n    }\n    return isValid;\n}\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUIsWUFBWWYsU0FBUyxDQUFDTSxHQUFHLENBQUM7UUFDMUJYLFNBQVNRLGNBQWMsQ0FBQyxvQkFBb0JKLFdBQVcsR0FBRztJQUM1RDtJQUVBLDJCQUEyQjtJQUMzQixNQUFNa0IsaUJBQWlCdEIsU0FBU1EsY0FBYyxDQUFDO0lBQy9DLElBQUksQ0FBQ2MsZUFBZWIsS0FBSyxDQUFDQyxLQUFLLENBQUMsYUFBYTtRQUMzQ1gsVUFBVTtRQUNWdUIsZUFBZWpCLFNBQVMsQ0FBQ00sR0FBRyxDQUFDO1FBQzdCWCxTQUFTUSxjQUFjLENBQUMsdUJBQXVCSixXQUFXLEdBQUc7SUFDL0Q7SUFFQSxpQkFBaUI7SUFDakIsTUFBTW1CLFFBQVF2QixTQUFTUSxjQUFjLENBQUM7SUFDdEMsSUFBSSxDQUFDZSxNQUFNZCxLQUFLLENBQUNDLEtBQUssQ0FBQywrQkFBK0I7UUFDcERYLFVBQVU7UUFDVndCLE1BQU1sQixTQUFTLENBQUNNLEdBQUcsQ0FBQztRQUNwQlgsU0FBU1EsY0FBYyxDQUFDLGNBQWNKLFdBQVcsR0FBRztJQUN0RDtJQUVBLE9BQU9MO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVmFsaWRhdGlvbi92YWxpZGF0aW9uLmpzP2I0YjQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xyXG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xyXG4gIFxyXG4gICAgLy8gQ2xlYXIgcHJldmlvdXMgZXJyb3IgbWVzc2FnZXNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvci1tZXNzYWdlJykuZm9yRWFjaChlbCA9PiBlbC50ZXh0Q29udGVudCA9ICcnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpKTtcclxuICBcclxuICAgIC8vIFZhbGlkYXRlIE5JU05cclxuICAgIGNvbnN0IG5pc24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmlzbicpO1xyXG4gICAgaWYgKCFuaXNuLnZhbHVlLm1hdGNoKC9eWzAtOV0rJC8pKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgbmlzbi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmlzbkVycm9yJykudGV4dENvbnRlbnQgPSAnTklTTiBoYW55YSBib2xlaCBkaWlzaSBkZW5nYW4gYW5na2EuJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIFZhbGlkYXRlIE5hbWEgU2lzd2FcclxuICAgIGNvbnN0IG5hbWFTaXN3YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1hX3Npc3dhJyk7XHJcbiAgICBpZiAobmFtYVNpc3dhLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICBuYW1hU2lzd2EuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWFTaXN3YUVycm9yJykudGV4dENvbnRlbnQgPSAnTmFtYSBsZW5na2FwIHdhamliIGRpaXNpLic7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBUYW5nZ2FsIExhaGlyXHJcbiAgICBjb25zdCB0YW5nZ2FsTGFoaXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFuZ2dhbF9sYWhpcicpO1xyXG4gICAgaWYgKHRhbmdnYWxMYWhpci52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICB0YW5nZ2FsTGFoaXIuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhbmdnYWxMYWhpckVycm9yJykudGV4dENvbnRlbnQgPSAnVGFuZ2dhbCBsYWhpciB3YWppYiBkaWlzaS4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgSmVuaXMgS2VsYW1pblxyXG4gICAgY29uc3QgamVuaXNLZWxhbWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2plbmlzX2tlbGFtaW4nKTtcclxuICAgIGlmIChqZW5pc0tlbGFtaW4udmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgamVuaXNLZWxhbWluLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqZW5pc0tlbGFtaW5FcnJvcicpLnRleHRDb250ZW50ID0gJ0plbmlzIGtlbGFtaW4gd2FqaWIgZGlwaWxpaC4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgTlBTTlxyXG4gICAgY29uc3QgbnBzbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducHNuJyk7XHJcbiAgICBpZiAoIW5wc24udmFsdWUubWF0Y2goL15bMC05XSskLykpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICBucHNuLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducHNuRXJyb3InKS50ZXh0Q29udGVudCA9ICdOUFNOIGhhbnlhIGJvbGVoIGRpaXNpIGRlbmdhbiBhbmdrYS4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgQXNhbCBTZWtvbGFoXHJcbiAgICBjb25zdCBhc2FsU2Vrb2xhaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc2FsX3Nla29sYWgnKTtcclxuICAgIGlmIChhc2FsU2Vrb2xhaC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgYXNhbFNla29sYWguY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzYWxTZWtvbGFoRXJyb3InKS50ZXh0Q29udGVudCA9ICdBc2FsIHNla29sYWggd2FqaWIgZGlpc2kuJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIFZhbGlkYXRlIEp1cnVzYW5cclxuICAgIGNvbnN0IGp1cnVzYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanVydXNhbicpO1xyXG4gICAgaWYgKGp1cnVzYW4udmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAganVydXNhbi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanVydXNhbkVycm9yJykudGV4dENvbnRlbnQgPSAnSnVydXNhbiB3YWppYiBkaXBpbGloLic7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBLb3RhL0thYnVwYXRlblxyXG4gICAgY29uc3Qga290YUthYnVwYXRlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrb3RhX2thYnVwYXRlbicpO1xyXG4gICAgaWYgKGtvdGFLYWJ1cGF0ZW4udmFsdWUgPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAga290YUthYnVwYXRlbi5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna290YUthYnVwYXRlbkVycm9yJykudGV4dENvbnRlbnQgPSAnS290YS9LYWJ1cGF0ZW4gd2FqaWIgZGlwaWxpaC4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgQWxhbWF0IFJ1bWFoXHJcbiAgICBjb25zdCBhbGFtYXRSdW1haCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJhbGFtYXRfcnVtYWhcIl0nKTtcclxuICAgIGlmIChhbGFtYXRSdW1haC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgYWxhbWF0UnVtYWguY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsYW1hdFJ1bWFoRXJyb3InKS50ZXh0Q29udGVudCA9ICdBbGFtYXQgcnVtYWggd2FqaWIgZGlpc2kuJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIFZhbGlkYXRlIE5vbW9yIEhhbmRwaG9uZVxyXG4gICAgY29uc3Qgbm9tb3JIYW5kcGhvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tb3JfaGFuZHBob25lJyk7XHJcbiAgICBpZiAoIW5vbW9ySGFuZHBob25lLnZhbHVlLm1hdGNoKC9eWzAtOV0rJC8pKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgbm9tb3JIYW5kcGhvbmUuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbW9ySGFuZHBob25lRXJyb3InKS50ZXh0Q29udGVudCA9ICdOb21vciBoYW5kcGhvbmUgaGFueWEgYm9sZWggZGlpc2kgZGVuZ2FuIGFuZ2thLic7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBFbWFpbFxyXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxuICAgIGlmICghZW1haWwudmFsdWUubWF0Y2goL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8pKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRXJyb3InKS50ZXh0Q29udGVudCA9ICdFbWFpbCB0aWRhayB2YWxpZC4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZvcm0iLCJpc1ZhbGlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuaXNuIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsIm1hdGNoIiwiYWRkIiwibmFtYVNpc3dhIiwidHJpbSIsInRhbmdnYWxMYWhpciIsImplbmlzS2VsYW1pbiIsIm5wc24iLCJhc2FsU2Vrb2xhaCIsImp1cnVzYW4iLCJrb3RhS2FidXBhdGVuIiwiYWxhbWF0UnVtYWgiLCJxdWVyeVNlbGVjdG9yIiwibm9tb3JIYW5kcGhvbmUiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Validation/validation.js\n"));

/***/ })

});