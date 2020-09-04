function processResults(results) {

    if (Object.keys(results).length === 0) {
      return null;
    }

    if (results['d10']) {
      return 10;
    }

    // Compute final result
    var result = 0;

    var d4Result = results['d4'];
    if (d4Result == 1 || d4Result == 3) {
      result += 1;
    }

    var d6Result = results['d6'];
    if (d6Result) {
      result += d6Result;
    }

    var d8Result = results['d8'];
    if (d8Result) {
      result += 5;
    }

    var d20Result = results['d20'];
    if (d20Result) {
      if (result != 0) {
        result += (result - 1) * 2;
      }
    }

    return result;
}
