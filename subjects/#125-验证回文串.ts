function isPalindrome(s: string): boolean {
  let afterString;

  afterString = s.match(/[a-zA-Z0-9]/g);

  afterString = afterString === null ? '' : afterString.join('').toLocaleUpperCase();

  let reverserString: string;

  reverserString = afterString.split('').reverse().join('');

  return afterString === reverserString;
};
