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

eval(__webpack_require__.ts("function validateForm(data) {\n    let isValid = true;\n    // Clear previous error messages\n    document.querySelectorAll(\".error-message\").forEach((el)=>el.textContent = \"\");\n    document.querySelectorAll(\"input, select, textarea\").forEach((el)=>el.classList.remove(\"error\"));\n    // Validate NISN\n    const nisn = data.nisn;\n    if (!nisn.match(/^[0-9]+$/)) {\n        isValid = false;\n        document.getElementById(\"nisn\").classList.add(\"error\");\n        document.getElementById(\"nisnError\").textContent = \"NISN hanya boleh diisi dengan angka.\";\n    }\n    // Validate Nama Siswa\n    const namaSiswa = data.nama_siswa;\n    if (namaSiswa.trim() === \"\") {\n        isValid = false;\n        document.getElementById(\"nama_siswa\").classList.add(\"error\");\n        document.getElementById(\"namaSiswaError\").textContent = \"Nama lengkap wajib diisi.\";\n    }\n    // Validate Tanggal Lahir\n    const tanggalLahir = data.tanggal_lahir;\n    if (tanggalLahir === \"\") {\n        isValid = false;\n        document.getElementById(\"tanggal_lahir\").classList.add(\"error\");\n        document.getElementById(\"tanggalLahirError\").textContent = \"Tanggal lahir wajib diisi.\";\n    }\n    // Validate Jenis Kelamin\n    const jenisKelamin = data.jenis_kelamin;\n    if (jenisKelamin === \"\") {\n        isValid = false;\n        document.getElementById(\"jenis_kelamin\").classList.add(\"error\");\n        document.getElementById(\"jenisKelaminError\").textContent = \"Jenis kelamin wajib dipilih.\";\n    }\n    // Validate NPSN\n    const npsn = data.npsn;\n    if (!npsn.match(/^[0-9]+$/)) {\n        isValid = false;\n        document.getElementById(\"npsn\").classList.add(\"error\");\n        document.getElementById(\"npsnError\").textContent = \"NPSN hanya boleh diisi dengan angka.\";\n    }\n    // Validate Asal Sekolah\n    const asalSekolah = data.asal_sekolah;\n    if (asalSekolah.trim() === \"\") {\n        isValid = false;\n        document.getElementById(\"asal_sekolah\").classList.add(\"error\");\n        document.getElementById(\"asalSekolahError\").textContent = \"Asal sekolah wajib diisi.\";\n    }\n    // Validate Jurusan\n    const jurusan = data.jurusan;\n    if (jurusan === \"\") {\n        isValid = false;\n        document.getElementById(\"jurusan\").classList.add(\"error\");\n        document.getElementById(\"jurusanError\").textContent = \"Jurusan wajib dipilih.\";\n    }\n    // Validate Kota/Kabupaten\n    const kotaKabupaten = data.kota_kabupaten;\n    if (kotaKabupaten === \"\") {\n        isValid = false;\n        document.getElementById(\"kota_kabupaten\").classList.add(\"error\");\n        document.getElementById(\"kotaKabupatenError\").textContent = \"Kota/Kabupaten wajib dipilih.\";\n    }\n    // Validate Alamat Rumah\n    const alamatRumah = data.alamat_rumah;\n    if (alamatRumah.trim() === \"\") {\n        isValid = false;\n        document.querySelector('textarea[name=\"alamat_rumah\"]').classList.add(\"error\");\n        document.getElementById(\"alamatRumahError\").textContent = \"Alamat rumah wajib diisi.\";\n    }\n    // Validate Nomor Handphone\n    const nomorHandphone = data.nomor_handphone;\n    if (!nomorHandphone.match(/^[0-9]+$/)) {\n        isValid = false;\n        document.getElementById(\"nomor_handphone\").classList.add(\"error\");\n        document.getElementById(\"nomorHandphoneError\").textContent = \"Nomor handphone hanya boleh diisi dengan angka.\";\n    }\n    // Validate Email\n    const email = data.email;\n    if (!email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {\n        isValid = false;\n        document.getElementById(\"email\").classList.add(\"error\");\n        document.getElementById(\"emailError\").textContent = \"Email tidak valid.\";\n    }\n    return isValid;\n}\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtRQUM3QmQsVUFBVTtRQUNWQyxTQUFTMEIsYUFBYSxDQUFDLGlDQUFpQ3JCLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDO1FBQ3RFVixTQUFTUyxjQUFjLENBQUMsb0JBQW9CTCxXQUFXLEdBQUc7SUFDNUQ7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTXVCLGlCQUFpQjdCLEtBQUs4QixlQUFlO0lBQzNDLElBQUksQ0FBQ0QsZUFBZW5CLEtBQUssQ0FBQyxhQUFhO1FBQ3JDVCxVQUFVO1FBQ1ZDLFNBQVNTLGNBQWMsQ0FBQyxtQkFBbUJKLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDO1FBQ3pEVixTQUFTUyxjQUFjLENBQUMsdUJBQXVCTCxXQUFXLEdBQUc7SUFDL0Q7SUFFQSxpQkFBaUI7SUFDakIsTUFBTXlCLFFBQVEvQixLQUFLK0IsS0FBSztJQUN4QixJQUFJLENBQUNBLE1BQU1yQixLQUFLLENBQUMsK0JBQStCO1FBQzlDVCxVQUFVO1FBQ1ZDLFNBQVNTLGNBQWMsQ0FBQyxTQUFTSixTQUFTLENBQUNLLEdBQUcsQ0FBQztRQUMvQ1YsU0FBU1MsY0FBYyxDQUFDLGNBQWNMLFdBQVcsR0FBRztJQUN0RDtJQUVBLE9BQU9MO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVmFsaWRhdGlvbi92YWxpZGF0aW9uLmpzP2I0YjQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGRhdGEpIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICBcclxuICAgIC8vIENsZWFyIHByZXZpb3VzIGVycm9yIG1lc3NhZ2VzXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3ItbWVzc2FnZScpLmZvckVhY2goZWwgPT4gZWwudGV4dENvbnRlbnQgPSAnJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKSk7XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBOSVNOXHJcbiAgICBjb25zdCBuaXNuID0gZGF0YS5uaXNuO1xyXG4gICAgaWYgKCFuaXNuLm1hdGNoKC9eWzAtOV0rJC8pKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25pc24nKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmlzbkVycm9yJykudGV4dENvbnRlbnQgPSAnTklTTiBoYW55YSBib2xlaCBkaWlzaSBkZW5nYW4gYW5na2EuJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIFZhbGlkYXRlIE5hbWEgU2lzd2FcclxuICAgIGNvbnN0IG5hbWFTaXN3YSA9IGRhdGEubmFtYV9zaXN3YTtcclxuICAgIGlmIChuYW1hU2lzd2EudHJpbSgpID09PSAnJykge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1hX3Npc3dhJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWFTaXN3YUVycm9yJykudGV4dENvbnRlbnQgPSAnTmFtYSBsZW5na2FwIHdhamliIGRpaXNpLic7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBUYW5nZ2FsIExhaGlyXHJcbiAgICBjb25zdCB0YW5nZ2FsTGFoaXIgPSBkYXRhLnRhbmdnYWxfbGFoaXI7XHJcbiAgICBpZiAodGFuZ2dhbExhaGlyID09PSAnJykge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YW5nZ2FsX2xhaGlyJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhbmdnYWxMYWhpckVycm9yJykudGV4dENvbnRlbnQgPSAnVGFuZ2dhbCBsYWhpciB3YWppYiBkaWlzaS4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgSmVuaXMgS2VsYW1pblxyXG4gICAgY29uc3QgamVuaXNLZWxhbWluID0gZGF0YS5qZW5pc19rZWxhbWluO1xyXG4gICAgaWYgKGplbmlzS2VsYW1pbiA9PT0gJycpIHtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamVuaXNfa2VsYW1pbicpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqZW5pc0tlbGFtaW5FcnJvcicpLnRleHRDb250ZW50ID0gJ0plbmlzIGtlbGFtaW4gd2FqaWIgZGlwaWxpaC4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgTlBTTlxyXG4gICAgY29uc3QgbnBzbiA9IGRhdGEubnBzbjtcclxuICAgIGlmICghbnBzbi5tYXRjaCgvXlswLTldKyQvKSkge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducHNuJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25wc25FcnJvcicpLnRleHRDb250ZW50ID0gJ05QU04gaGFueWEgYm9sZWggZGlpc2kgZGVuZ2FuIGFuZ2thLic7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBBc2FsIFNla29sYWhcclxuICAgIGNvbnN0IGFzYWxTZWtvbGFoID0gZGF0YS5hc2FsX3Nla29sYWg7XHJcbiAgICBpZiAoYXNhbFNla29sYWgudHJpbSgpID09PSAnJykge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc2FsX3Nla29sYWgnKS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNhbFNla29sYWhFcnJvcicpLnRleHRDb250ZW50ID0gJ0FzYWwgc2Vrb2xhaCB3YWppYiBkaWlzaS4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgSnVydXNhblxyXG4gICAgY29uc3QganVydXNhbiA9IGRhdGEuanVydXNhbjtcclxuICAgIGlmIChqdXJ1c2FuID09PSAnJykge1xyXG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqdXJ1c2FuJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2p1cnVzYW5FcnJvcicpLnRleHRDb250ZW50ID0gJ0p1cnVzYW4gd2FqaWIgZGlwaWxpaC4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgS290YS9LYWJ1cGF0ZW5cclxuICAgIGNvbnN0IGtvdGFLYWJ1cGF0ZW4gPSBkYXRhLmtvdGFfa2FidXBhdGVuO1xyXG4gICAgaWYgKGtvdGFLYWJ1cGF0ZW4gPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tvdGFfa2FidXBhdGVuJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tvdGFLYWJ1cGF0ZW5FcnJvcicpLnRleHRDb250ZW50ID0gJ0tvdGEvS2FidXBhdGVuIHdhamliIGRpcGlsaWguJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIFZhbGlkYXRlIEFsYW1hdCBSdW1haFxyXG4gICAgY29uc3QgYWxhbWF0UnVtYWggPSBkYXRhLmFsYW1hdF9ydW1haDtcclxuICAgIGlmIChhbGFtYXRSdW1haC50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cImFsYW1hdF9ydW1haFwiXScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGFtYXRSdW1haEVycm9yJykudGV4dENvbnRlbnQgPSAnQWxhbWF0IHJ1bWFoIHdhamliIGRpaXNpLic7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBWYWxpZGF0ZSBOb21vciBIYW5kcGhvbmVcclxuICAgIGNvbnN0IG5vbW9ySGFuZHBob25lID0gZGF0YS5ub21vcl9oYW5kcGhvbmU7XHJcbiAgICBpZiAoIW5vbW9ySGFuZHBob25lLm1hdGNoKC9eWzAtOV0rJC8pKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vbW9yX2hhbmRwaG9uZScpLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21vckhhbmRwaG9uZUVycm9yJykudGV4dENvbnRlbnQgPSAnTm9tb3IgaGFuZHBob25lIGhhbnlhIGJvbGVoIGRpaXNpIGRlbmdhbiBhbmdrYS4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gVmFsaWRhdGUgRW1haWxcclxuICAgIGNvbnN0IGVtYWlsID0gZGF0YS5lbWFpbDtcclxuICAgIGlmICghZW1haWwubWF0Y2goL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8pKSB7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJykuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRXJyb3InKS50ZXh0Q29udGVudCA9ICdFbWFpbCB0aWRhayB2YWxpZC4nO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZvcm0iLCJkYXRhIiwiaXNWYWxpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibmlzbiIsIm1hdGNoIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJuYW1hU2lzd2EiLCJuYW1hX3Npc3dhIiwidHJpbSIsInRhbmdnYWxMYWhpciIsInRhbmdnYWxfbGFoaXIiLCJqZW5pc0tlbGFtaW4iLCJqZW5pc19rZWxhbWluIiwibnBzbiIsImFzYWxTZWtvbGFoIiwiYXNhbF9zZWtvbGFoIiwianVydXNhbiIsImtvdGFLYWJ1cGF0ZW4iLCJrb3RhX2thYnVwYXRlbiIsImFsYW1hdFJ1bWFoIiwiYWxhbWF0X3J1bWFoIiwicXVlcnlTZWxlY3RvciIsIm5vbW9ySGFuZHBob25lIiwibm9tb3JfaGFuZHBob25lIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Validation/validation.js\n"));

/***/ })

});