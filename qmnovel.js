var cookieName = '七猫小说'
var qmnovel = init()
var DCURL = qmnovel.getdata("UrlDC")
var DCKEY = qmnovel.getdata("CookieDC")
var VDURL = qmnovel.getdata("UrlVD")
var VDKEY = qmnovel.getdata("CookieVD")
var LTURL = qmnovel.getdata("UrlLT")
var LTKEY = qmnovel.getdata("CookieLT")
var VCURL = qmnovel.getdata("UrlVC")
var Totalresult = new Array()
var time = 100

let isGetCookie = typeof $request !== 'undefined'

if (isGetCookie) {
   GetCookie()
   qmnovel.done()
} else {
   all()
   qmnovel.done()
}

function all() {
 LuckyTurn(time,1).then(LuckyTurn(time,2)).then(LuckyTurn(time,3)).then(LuckyTurn(time,4)).then(LuckyTurn(time,5)).then(DailyCheckin(time)).then(VideoCoin(time)).then(VideoCheckin(time)).then((data) => {Notify(1500)});
}


function GetCookie() {
  const dailycheckin = '/api/v1/sign-in/do-sign-in';
  const videocheckin = '/api/v1/task/get-watch-video-reward';
  const turn = '/api/v2/lucky-draw/do-extracting';
  const video = '/api/v1/sign-in/sign-in-video-coin';
  var url = $request.url;
  if (url.indexOf(dailycheckin) != -1) {
     if (url) {
        var UrlKeyDC = "UrlDC";
        var UrlNameDC = "七猫小说日常签到";
        var UrlValueDC = url;
        if (qmnovel.getdata(UrlKeyDC) != (undefined || null)) {
           if (qmnovel.getdata(UrlKeyDC) != UrlValueDC) {
              var urlDC = qmnovel.setdata(UrlValueDC, UrlKeyDC);
              if (!urlDC) {
                 qmnovel.msg("更新" + UrlNameDC + "Url失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + UrlNameDC + "Url成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(UrlNameDC + "Url未变化❗️", "", "");
              }
           } else {
           var urlDC = qmnovel.setdata(UrlValueDC, UrlKeyDC);
           if (!cookieDC) {
              qmnovel.msg("首次写入" + UrlNameDC + "Url失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + UrlNameDC + "Url成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + UrlNameDC + "Url失败‼️", "", "配置错误, 无法读取请求头, ");
        }
     if ($request.headers) {
        var CookieKeyDC = "CookieDC";
        var CookieNameDC = "七猫小说日常签到及视频奖励";
        var CookieValueDC = JSON.stringify($request.headers);
        if (qmnovel.getdata(CookieKeyDC) != (undefined || null)) {
           if (qmnovel.getdata(CookieKeyDC) != CookieValueDC) {
              var cookieDC = qmnovel.setdata(CookieValueDC, CookieKeyDC);
              if (!cookieDC) {
                 qmnovel.msg("更新" + CookieNameDC + "Cookie失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + CookieNameDC + "Cookie成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(CookieNameDC + "Cookie未变化❗️", "", "");
              }
           } else {
           var cookieDC = qmnovel.setdata(CookieValueDC, CookieKeyDC);
           if (!cookieDC) {
              qmnovel.msg("首次写入" + CookieNameDC + "Cookie失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + CookieNameDC + "Cookie成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + CookieNameDC + "Cookie失败‼️", "", "配置错误, 无法读取请求头, ");
        }
     } else if (url.indexOf(videocheckin) != -1) {
     if (url) {
        var UrlKeyVD = "UrlVD";
        var UrlNameVD = "七猫小说视频签到";
        var UrlValueVD = url;
        if (qmnovel.getdata(UrlKeyVD) != (undefined || null)) {
           if (qmnovel.getdata(UrlKeyVD) != UrlValueVD) {
              var UrlVD = qmnovel.setdata(UrlValueVD, UrlKeyVD);
              if (!UrlVD) {
                 qmnovel.msg("更新" + UrlNameVD + "Url失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + UrlNameVD + "Url成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(UrlNameVD + "Url未变化❗️", "", "");
              }
           } else {
           var UrlVD = qmnovel.setdata(UrlValueVD, UrlKeyVD);
           if (!UrlVD) {
              qmnovel.msg("首次写入" + UrlNameVD + "Url失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + UrlNameVD + "Url成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + UrlNameVD + "Url失败‼️", "", "配置错误, 无法读取请求头, ");
        }    
     if ($request.headers) {
        var CookieKeyVD = "CookieVD";
        var CookieNameVD = "七猫小说视频签到";
        var CookieValueVD = JSON.stringify($request.headers);
        if (qmnovel.getdata(CookieKeyVD) != (undefined || null)) {
           if (qmnovel.getdata(CookieKeyVD) != CookieValueVD) {
              var cookieVD = qmnovel.setdata(CookieValueVD, CookieKeyVD);
              if (!cookieVD) {
                 qmnovel.msg("更新" + CookieNameVD + "Cookie失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + CookieNameVD + "Cookie成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(CookieNameVD + "Cookie未变化❗️", "", "");
              }
           } else {
           var cookieVD = qmnovel.setdata(CookieValueVD, CookieKeyVD);
           if (!cookieVD) {
              qmnovel.msg("首次写入" + CookieNameVD + "Cookie失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + CookieNameVD + "Cookie成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + CookieNameVD + "Cookie失败‼️", "", "配置错误, 无法读取请求头, ");
        }
     } else if (url.indexOf(turn) != -1) {
     if (url) {
        var UrlKeyLT = "UrlLT";
        var UrlNameLT = "七猫小说幸运大转盘";
        var UrlValueLT = url;
        if (qmnovel.getdata(UrlKeyLT) != (undefined || null)) {
           if (qmnovel.getdata(UrlKeyLT) != UrlValueLT) {
              var urlLT = qmnovel.setdata(UrlValueLT, UrlKeyLT);
              if (!urlLT) {
                 qmnovel.msg("更新" + UrlNameLT + "Url失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + UrlNameLT + "Url成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(UrlNameLT + "Url未变化❗️", "", "");
              }
           } else {
           var urlLT = qmnovel.setdata(UrlValueLT, UrlKeyLT);
           if (!urlLT) {
              qmnovel.msg("首次写入" + UrlNameLT + "Url失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + UrlNameLT + "Url成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + UrlNameLT + "Url失败‼️", "", "配置错误, 无法读取请求头, ");
        }
     if ($request.headers) {
        var CookieKeyLT = "CookieLT";
        var CookieNameLT = "七猫小说幸运大转盘";
        var CookieValueLT = JSON.stringify($request.headers);
        if (qmnovel.getdata(CookieKeyLT) != (undefined || null)) {
           if (qmnovel.getdata(CookieKeyLT) != CookieValueLT) {
              var cookieLT = qmnovel.setdata(CookieValueLT, CookieKeyLT);
              if (!cookieLT) {
                 qmnovel.msg("更新" + CookieNameLT + "Cookie失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + CookieNameLT + "Cookie成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(CookieNameLT + "Cookie未变化❗️", "", "");
              }
           } else {
           var cookieLT = qmnovel.setdata(CookieValueLT, CookieKeyLT);
           if (!cookieLT) {
              qmnovel.msg("首次写入" + CookieNameLT + "Cookie失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + CookieNameLT + "Cookie成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + CookieNameLT + "Cookie失败‼️", "", "配置错误, 无法读取请求头, ");
        }
     } else if (url.indexOf(video) != -1) {
     if (url) {
        var UrlKeyVC = "UrlVC";
        var UrlNameVC = "七猫小说视频奖励";
        var UrlValueVC = url;
        if (qmnovel.getdata(UrlKeyVC) != (undefined || null)) {
           if (qmnovel.getdata(UrlKeyVC) != UrlValueVC) {
              var urlVC = qmnovel.setdata(UrlValueVC, UrlKeyVC);
              if (!urlVC) {
                 qmnovel.msg("更新" + UrlNameVC + "Url失败‼️", "", "");
                 } else {
                 qmnovel.msg("更新" + UrlNameVC + "Url成功🎉", "", "");
                 }
              } else {
              qmnovel.msg(UrlNameVC + "Url未变化❗️", "", "");
              }
           } else {
           var urlVC = qmnovel.setdata(UrlValueVC, UrlKeyVC);
           if (!urlVC) {
              qmnovel.msg("首次写入" + UrlNameVC + "Url失败‼️", "", "");
              } else {
              qmnovel.msg("首次写入" + UrlNameVC + "Url成功🎉", "", "");
              }
           }
        } else {
        qmnovel.msg("写入" + UrlNameVC + "Url失败‼️", "", "配置错误, 无法读取请求头, ");
        }
     }     
}

function DailyCheckin(t) {
  return new Promise(resolve => {
    setTimeout(() => {
      try {
          url = { url: DCURL, headers: JSON.parse(DCKEY) }
          qmnovel.get(url, (error, response, data) => {
          var obj = JSON.parse(data);
          qmnovel.log(`${cookieName}日常签到, data: ${data}`)
          if (obj.data) {
             var DCresult = '日常签到结果: 成功🎉 签到奖励: '+ obj.data.coin +'金币\n';
             Totalresult.push(DCresult);
          } else if (obj.errors) {
             if (obj.errors.code == 23010103) {
                var DCresult = '日常签到结果: 成功(重复签到)🎉\n';
                Totalresult.push(DCresult);
             } else {
                var DCresult = '日常签到结果: 失败‼️ 说明: ' + obj.errors.details + '\n';
                Totalresult.push(DCresult);                
             }
          }          
          resolve('done');
        })
      }
      catch (erre) {
        resolve('done')
      }
    }, t)
  })
}

function VideoCheckin(t) {
  return new Promise(resolve => {
    setTimeout(() => {
      try {
          url = { url: VDURL, headers: JSON.parse(VDKEY) }
          qmnovel.get(url, (error, response, data) => {
          var obj = JSON.parse(data);
          qmnovel.log(`${cookieName}视频签到, data: ${data}`)
          if (obj.data) {
             var VDresult = '视频签到结果: 成功🎉 签到奖励: '+ obj.data.reward_cash +'金币\n';
             Totalresult.push(VDresult);
          } else if (obj.errors) {
             if (obj.errors.code == 13101002) {
                var VDresult = '视频签到结果: 成功(重复签到)🎉 说明: ' + obj.errors.details + '\n';
                Totalresult.push(VDresult);
             } else {
                var VDresult = '视频签到结果: 失败‼️ 说明: ' + obj.errors.details + '\n';
                Totalresult.push(VDresult);
             }
          }
          resolve('done');
        })
      }
      catch (erre) {
        resolve('done')
      }
    }, t)
  })
}

function VideoCoin(t) {
  return new Promise(resolve => {
    setTimeout(() => {
      try {
          url = { url: VCURL, headers: JSON.parse(DCKEY) }
          qmnovel.get(url, (error, response, data) => {
          var obj = JSON.parse(data);
          qmnovel.log(`${cookieName}视频奖励, data: ${data}`)
          if (obj.data) {
             var VCresult = '视频奖励: 成功🎉 签到奖励: '+ $obj.data.coin +'金币\n';
             Totalresult.push(VCresult);
          } else if (obj.errors) {
             if (obj.errors.code == 23010107) {
                var VCresult = '视频奖励: 成功(重复签到)🎉 说明: ' + obj.errors.details + '\n';
                Totalresult.push(VCresult);
             } else {
                var VCresult = '视频奖励: 失败‼️ 说明: ' + obj.errors.details + '\n';
                Totalresult.push(VCresult);
             }
          }
          resolve('done');
        })
      }
      catch (erre) {
        resolve('done')
      }
    }, t)
  })
}

function LuckyTurn(t,n) {
  return new Promise(resolve => {
    setTimeout(() => {
      try {
          url = { url: LTURL, headers: JSON.parse(LTKEY) }
          qmnovel.get(url, (error, response, data) => {
          var obj = JSON.parse(data);
          qmnovel.log(`${cookieName}幸运大转盘, data: ${data}`)
          if (obj.data) {
             var LTresult = '第' + n + '次' + '幸运大转盘: 成功🎉 转盘奖励: ' + obj.data.prize_title + '\n';
             Totalresult.push(LTresult);
          } else if (obj.errors) {
             if (obj.errors.code == 13101002) {
                var LTresult = '幸运大转盘: 次数耗尽🚫 说明: ' + obj.errors.details + '\n';
                Totalresult.push(LTresult);
             } else {
                var LTresult = '幸运大转盘: 失败‼️ 说明: ' + obj.errors.details + '\n';
                Totalresult.push(LTresult);
             }
          }
          resolve('done');
        })
      }
      catch (erre) {
        resolve('done')
      }
    }, t)
  })
}

function Notify(t) {
  return new Promise(resolve => {
    setTimeout(() => {
      try {
          let details = Totalresult.join("")
          qmnovel.msg(cookieName, '', details)
      }
      catch (erre) {
        resolve()
      }
    }, t)
  })
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  put = (url, cb) => {
    if (isSurge()) {
      $httpClient.put(url, cb)
    }
    if (isQuanX()) {
      url.method = 'PUT'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, put, done }
}