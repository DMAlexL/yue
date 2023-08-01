/**
 * 最大长度
 */
const maxLength = 32;
/**
 * 最小长度
 */
const minLength = 8;
/**
 * 数字
 */
const REG_NUMBER = '.*\\d+.*';
/**
 * 小写字母
 */
const REG_UPPERCASE = '.*[A-Z]+.*';
/**
 * 大写字母
 */
const REG_LOWERCASE = '.*[a-z]+.*';
/**
 * 特殊符号(~!@#$%^&*()_+|<>,.?/:;'[]{}\)
 */
const REG_SYMBOL = '.*[~!@#$%^&*()_+|<>,.?/:;\'\\[\\]{}"]+.*';
/**
 * 是否包含3个及以上相同或字典连续字符
 */
const isContinuousChar = (password: string): boolean => {
  const chars: string[] = password.split('');
  for (let i = 0; i < chars.length - 3; i++) {
    const n1 = chars[i].charCodeAt(0);
    const n2 = chars[i + 1].charCodeAt(0);
    const n3 = chars[i + 2].charCodeAt(0);
    const n4 = chars[i + 3].charCodeAt(0);
    // 判断重复字符
    if (n1 === n2 && n1 === n3 && n1 === n4) {
      return true;
    }
    // 判断连续字符： 正序 + 倒序
    if (
      (n1 + 1 === n2 && n1 + 2 === n3 && n1 + 3 === n4) ||
      (n1 - 1 === n2 && n1 - 2 === n3 && n1 - 3 === n4)
    ) {
      return true;
    }
  }
  return false;
};

/**
 * 校验密码
 * 1.长度大于8，且小于32
 * 2.不能包含连续3位及以上相同字母或数字
 * 3.不能包含3个以上字典连续字符
 * 4.数字、小写字母、大写字母、特殊字符，至少包含三种
 * @param {string} password
 */
export const checkPasswordRules = (password: string) => {
  if (
    !password.length ||
    password.length < minLength ||
    password.length > maxLength
  ) {
    return false;
  }

  if (isContinuousChar(password)) {
    return false;
  }

  let i = 0;
  if (password.match(REG_NUMBER)) i++;
  if (password.match(REG_LOWERCASE)) i++;
  if (password.match(REG_UPPERCASE)) i++;
  if (password.match(REG_SYMBOL)) i++;
  if (i < 3) {
    console.log('数字、小写字母、大写字母、特殊字符，至少包含三种');
    return false;
  }
  return true;
};

const STRING_NAME = ['admin', 'root', 'huawei', 'cisco'];

const isContinuousCharFive = (password: string): boolean => {
  const chars: string[] = password.split('');
  for (let i = 0; i < chars.length - 5; i++) {
    const n1 = chars[i].charCodeAt(0);
    const n2 = chars[i + 1].charCodeAt(0);
    const n3 = chars[i + 2].charCodeAt(0);
    const n4 = chars[i + 3].charCodeAt(0);
    const n5 = chars[i + 4].charCodeAt(0);
    const n6 = chars[i + 5].charCodeAt(0);
    // 判断重复字符
    if (n1 === n2 && n1 === n3 && n1 === n4 && n1 === n5 && n1 === n6) {
      return true;
    }
    // 判断连续字符： 正序 + 倒序
    if (
      (n1 + 1 === n2 &&
        n1 + 2 === n3 &&
        n1 + 3 === n4 &&
        n1 + 4 === n5 &&
        n1 + 5 === n6) ||
      (n1 - 1 === n2 &&
        n1 - 2 === n3 &&
        n1 - 3 === n4 &&
        n1 - 4 === n5 &&
        n1 - 5 === n6)
    ) {
      return true;
    }
  }
  return false;
};

/**
 * 1.不可包含root，admin，huawei，cisco，5位以上连续字符或相同字符
 * 校验用户名规则
 * @param password
 */
export const checkUsernameRules = (username: string) => {
  for (let i = 0; i < STRING_NAME.length; i++) {
    if (username.includes(STRING_NAME[i])) {
      //System.out.println("用户名不可包含特殊字符");
      return false;
    }
  }
  if (isContinuousCharFive(username)) {
    //System.out.println("包含5个以上相同字符或连续字符");
    return false;
  }
  return true;
};
