"""Die rolling program that accepts multipe iterables of [# of dice, value]."""
import random
import sys


def roller(num, max_val):
    """Roll a die num times and returns a list of values."""
    values = [random.randint(1, max_val) for x in range(num)]
    return values


def multiroll(*args):
    """Return a dict with sum and list of values for all dice rolled."""
    values = []
    for arg in args:
        try:
            num, val = arg.split('d')
            num, val = int(num), int(val)
            if num <= 0 or val <= 0:
                return "# of dice and die value must be positive integers."
        except:
            return "Each arg must be of the format [int]d[int]. E.g. 2d6 for 2 six-sided dice."

        values += roller(num, val)
    total = sum(values)
    return {"total": total, "list": values}


if __name__ == "__main__":
    arg_slice = sys.argv[1:]
    print(multiroll(*arg_slice))
