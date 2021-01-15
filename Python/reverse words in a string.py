class Solution(object):
    def reverseWords(self, s):
        cleanString = s.strip()
        listOfWords = []

        currentWord = ''
        for letter in cleanString:
            if (letter == ' '):
                if (currentWord != ''):
                    listOfWords.append(currentWord)
                    currentWord = ''
                else:
                    continue
            else:
                currentWord += letter
        
        listOfWords.append(currentWord)


        return " ".join(reversed(listOfWords))
