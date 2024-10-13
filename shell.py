from pyscript import ffi, window, document, when
import code

STY = window.getComputedStyle(document.querySelector(':root'))
BG_COL = STY.getPropertyValue('--bg_col')
def loadTerminal(event = None):
    theme = window.localStorage.getItem("theme")
    if theme == "light":
        bg_col = STY.getPropertyValue('--bg_light')
    else:
        bg_col = STY.getPropertyValue('--bg_dark')
    __terminal__.options = ffi.to_js({"theme":
                                            {"background":bg_col},
                                        "minimumContrastRatio":6,
                                        "cursorStyle":"underline",
                                        "cursorBlink":True,
                                        })
    __terminal__.write("\x9D12;#828181\x07") # Setting cursorfg color
    code.interact()

if __name__ == "__main__":
    loadTerminal()