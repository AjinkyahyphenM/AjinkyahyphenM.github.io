from pyscript import ffi, js_modules, document
import code

# addon = js_modules.weblinks.FitAddon.new()
__terminal__.options = ffi.to_js({"theme":
                                        {"background":"black"},
                                    "minimumContrastRatio":6,
                                    "cursorStyle":"underline",
                                    "cursorBlink":True,
                                    # "allowTransparency":False,
                                    # "windowOptions":
                                    #     {"setWinSizePixels":True}
                                    })
# __terminal__.loadAddon(addon)
__terminal__.write("\x9D12;#828181\x07")
# __terminal__.write("\x9B4;10;10t")
# addon.fit()

code.interact()