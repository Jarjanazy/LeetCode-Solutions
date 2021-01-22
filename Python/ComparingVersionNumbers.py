class Solution(object):
    def compareVersion(self, version1, version2):
        version1_segments = version1.split(".")
        version2_segments = version2.split(".")
        
        version1_segments_length = len(version1_segments)
        version2_segments_length = len(version2_segments)
        min_length = min(version1_segments_length, version2_segments_length)

        currentIndex = 0
        while (currentIndex < min_length):
            current_v1 = int(version1_segments[currentIndex])
            current_v2 = int(version2_segments[currentIndex])

            if (current_v1 > current_v2):
                return 1
            elif (current_v2 > current_v1):
                return -1
            currentIndex += 1

        if (version1_segments_length != version2_segments_length):
            if (doesntEndWithZeros(version1_segments_length, version1_segments,currentIndex)):
                return 1
            elif (doesntEndWithZeros(version2_segments_length, version2_segments,currentIndex)):
                return -1
            else:
                return 0
        else:
            return 0

def doesntEndWithZeros(version_segments_length, version_segment,currentIndex):
    while (currentIndex < version_segments_length):
        if (int(version_segment[currentIndex]) != 0):
            return True
        currentIndex += 1
    return False