/**
 * @todo 코드 간결화 방향 없는지 고민할 것. eg) const MSG_100 = `메세지문구` 방식.
 * @param {*} msgObj
 * @returns
 */
function commonMsgText(msgObj) {
  const { code, arg1 } = msgObj;

  if (code === 100) {
    return '';
  }
  if (code === 110) {
    return `사용 가능한 ${arg1}입니다.`;
  }
  if (code === 101) {
    return `${arg1}을 입력해주세요.`;
  }
  if (code === 102) {
    return `${arg1}자 미만으로 입력해주세요.`;
  }
  if (code === 103) {
    return `${arg1}를 포함해서 입력해주세요.`;
  }
  if (code === 104) {
    return '중복 확인을 해주세요.';
  }
  if (code === 105) {
    return `사용 중인 ${arg1}입니다.`;
  }
  if (code === 106) {
    return '비밀번호를 8자 이상 입력해주세요.';
  }
  if (code === 107) {
    return '이메일 양식에 맞춰 입력하세요.';
  }
  if (code === 108) {
    return '특수문자는 다음 특수문자만 입력 가능합니다. (!, @, #, $, %, ^, &, *, ?, _, ~)';
  }
  if (code === 109) {
    return '비밀번호와 일치하지 않습니다.';
  }

  return '';
}

export default commonMsgText;
