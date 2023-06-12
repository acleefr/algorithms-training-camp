// reverse a string
//
// Input: "hello"
// Output: "olleh"

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *reverse(char *s) {
    int len = strlen(s);
    char *result = malloc(sizeof(char) * (len + 1));
    int i = 0;
    while (i < len) {
        result[i] = s[len - i - 1];
        i++;
    }
    result[i] = '\0';
    return result;
}