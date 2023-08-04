# create a python code that creates a GUI which sheets and tabs
import tkinter as tk
from tkinter import ttk
from tkinter import scrolledtext
from tkinter import Menu
from tkinter import messagebox as mBox
from tkinter import Spinbox
from tkinter import filedialog as fd
from tkinter import *
from tkinter import simpledialog as sd
from tkinter import colorchooser as cc

win = tk.Tk()
win.title("Python GUI")

tabControl = ttk.Notebook(win)
tab1 = ttk.Frame(tabControl)
tabControl.add(tab1, text='Tab 1')
tabControl.pack(expand=1, fill="both")

tab2 = ttk.Frame(tabControl)
tabControl.add(tab2, text='Tab 2')
tabControl.pack(expand=1, fill="both")

# LabelFrame using tab1 as the parent
mighty = ttk.LabelFrame(tab1, text=' Mighty Python ')
mighty.grid(column=0, row=0, padx=8, pady=4)
# show the mighty LabelFrame using grid layout manager


# create a frame inside the tab1 which contains the sheets and cells
# LabelFrame using mighty as the parent

# Labels are used to create text boxes
a_label = ttk.Label(mighty, text="Enter a name:")
a_label.grid(column=0, row=0, sticky='W')

# Entry is used to create text boxes
name = tk.StringVar()

# Combobox is used to create drop down menus
number = tk.StringVar()

# Checkbutton is used to create check boxes
chVarDis = tk.IntVar()

# Radiobutton is used to create radio buttons
radVar = tk.IntVar()

# Spinbox is used to create spin boxes
spin = Spinbox(mighty, from_=0, to=10, width=5, textvariable=number)
spin.grid(column=1, row=2, sticky='W')

# ScrolledText is used to create text boxes with scrolling
scrolW = 30
scrolH = 3
scr = scrolledtext.ScrolledText(mighty, width=scrolW, height=scrolH, wrap=tk.WORD)
scr.grid(column=0, row=3, sticky='WE', columnspan=3)

# Button is used to create buttons


# Menu is used to create menus
menu_bar = Menu(win)
menu_bar.add_command(label="File")
menu_bar.add_command(label="Exit", command=win.quit)


win.config(menu=menu_bar)
win.mainloop()

print("Hello World")
# messagebox is used to create message boxes
# filedialog is used to create file dialog boxes
# colorchooser is used to create color chooser dialog boxes
# simpledialog is used to create simple dialog boxes

