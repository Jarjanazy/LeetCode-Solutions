'''import string


def getAlphabitList ():
    return [chr(i) for i in range(ord('A'),ord('Z')+1)]


def numbers_to_letters(s):
    alph = getAlphabitList()
    result = ""
    words = s.split("+")
    for word in words:
        currentWord = ""
        nums = word.split(" ")
        for num in nums:
            currentWord += alph[int(num)-1]
        result += currentWord + " "
    return result.strip()

    
print("'" + numbers_to_letters('20 5 19 20+4 15 13 5+10 11') + "'")'''

import xml.etree.ElementTree as ET

def ids_by_message(xml, message):
    result = []
    struct = ET.ElementTree(ET.fromstring(xml))
    root = struct.getroot()
    for child in root:
        for c2 in child:
            if (c2.text == message):
                result.append(child.attrib.get('id'))
    return result

xml = """<?xml version="1.0" encoding="UTF-8"?>
<log>
    <entry id="1">
        <message>Application started</message>
    </entry>
    <entry id="2">
        <message>Application ended</message>
    </entry>
</log>"""

print(ids_by_message(xml, 'Application ended'))