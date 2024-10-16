from pyscript import document, window, ffi, when
from js import console
# from shell import loadTerminal


ROOT = document.querySelector(':root')
STY = window.getComputedStyle(ROOT)

def isVisibleInViewport(element):
    item = element.getBoundingClientRect()
    ret = (item.top >= 0 and 
            item.left >= 0 and 
            item.bottom <= ( 
                    window.innerHeight or 
                    document.documentElement.clientHeight) and
                item.right <= ( 
                    window.innerWidth or 
                    document.documentElement.clientWidth) )
    return ret

def setTheme():
    bg_light = STY.getPropertyValue('--bg_light')
    fg_light = STY.getPropertyValue('--fg_light')
    bg_dark = STY.getPropertyValue('--bg_dark')
    fg_dark = STY.getPropertyValue('--fg_dark')
    theme = window.localStorage.getItem("theme")
    curr_theme_ind = document.getElementById("theme_toggle_btn")
    if theme == "dark":
        curr_theme_ind.innerHTML = "!Dark"
        ROOT.style.setProperty("--bg_col", bg_dark)
        ROOT.style.setProperty("--fg_col", fg_dark)
    elif theme == "light":
        curr_theme_ind.innerHTML = "Light!"
        ROOT.style.setProperty("--bg_col", bg_light)
        ROOT.style.setProperty("--fg_col", fg_light)
    else:
        curr_theme_ind.innerHTML = "!Dark"
        ROOT.style.setProperty("--bg_col", bg_dark)
        ROOT.style.setProperty("--fg_col", fg_dark)


def toggleTheme(event):
    bg_light = STY.getPropertyValue('--bg_light')
    fg_light = STY.getPropertyValue('--fg_light')
    bg_dark = STY.getPropertyValue('--bg_dark')
    fg_dark = STY.getPropertyValue('--fg_dark')
    theme = window.localStorage.getItem("theme")
    curr_theme_ind = document.getElementById("theme_toggle_btn")
    if theme == 'dark':
        console.log("dark set to light")
        window.localStorage.setItem("theme", "light")
        curr_theme_ind.innerHTML = "Light!"
        ROOT.style.setProperty("--bg_col", bg_light)
        ROOT.style.setProperty("--fg_col", fg_light)
    elif theme == 'light':
        console.log("light set to dark")
        window.localStorage.setItem("theme", "dark")
        console.log("current theme: "+window.localStorage.getItem("theme"))
        curr_theme_ind.innerHTML = "!Dark"
        ROOT.style.setProperty("--bg_col", bg_dark)
        ROOT.style.setProperty("--fg_col", fg_dark)
    else:
        console.log("default")
        window.localStorage.setItem("theme", "dark")
        console.log("current theme: "+window.localStorage.getItem("theme"))
        curr_theme_ind.innerHTML = "!Dark"
        ROOT.style.setProperty("--bg_col", bg_dark)
        ROOT.style.setProperty("--fg_col", fg_dark)
    # loadTerminal()

def updateNav():
    home     = document.getElementById("home_ele")
    about    = document.getElementById("about_ele")
    projects = document.getElementById("projects_ele")
    contacts = document.getElementById("contacts_ele")
    nav_bar = [home, about, projects, contacts]
    for item in nav_bar:
        if isVisibleInViewport(item):
            console.log(item)


def load(event = None):
    setTheme()
    window.addEventListener('scroll', updateNav())
    console.log("running...")

if __name__ == "__main__":
    load()