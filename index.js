const _0x597d94=_0x20e3;(function(_0x16b6d9,_0x34d1cd){const _0x5bc9d4=_0x20e3,_0xd93bf0=_0x16b6d9();while(!![]){try{const _0x2984d1=-parseInt(_0x5bc9d4(0x29a))/0x1+-parseInt(_0x5bc9d4(0x24f))/0x2+parseInt(_0x5bc9d4(0x269))/0x3*(parseInt(_0x5bc9d4(0x244))/0x4)+-parseInt(_0x5bc9d4(0x247))/0x5*(-parseInt(_0x5bc9d4(0x288))/0x6)+-parseInt(_0x5bc9d4(0x296))/0x7+-parseInt(_0x5bc9d4(0x1f7))/0x8+-parseInt(_0x5bc9d4(0x264))/0x9*(-parseInt(_0x5bc9d4(0x1d1))/0xa);if(_0x2984d1===_0x34d1cd)break;else _0xd93bf0['push'](_0xd93bf0['shift']());}catch(_0x26ad72){_0xd93bf0['push'](_0xd93bf0['shift']());}}}(_0x1bba,0x27769),require(_0x597d94(0x270)));const {default:XeonBotIncConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,makeInMemoryStore,jidDecode,proto}=require('@adiwajshing/baileys'),{state,saveState}=useSingleFileAuthState(sessionName+'.json'),pino=require(_0x597d94(0x22b)),{Boom}=require(_0x597d94(0x238)),fs=require('fs'),yargs=require(_0x597d94(0x281)),chalk=require(_0x597d94(0x271)),FileType=require('file-type'),path=require(_0x597d94(0x2a4)),_=require(_0x597d94(0x1fb)),axios=require(_0x597d94(0x29c)),PhoneNumber=require(_0x597d94(0x1dc)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x597d94(0x226)),{smsg,isUrl,generateMessageTag,getBuffer,getSizeMedia,fetchJson,await,sleep}=require('./lib/myfunc'),{TelegraPh}=require('./lib/uploader'),moment=require(_0x597d94(0x1e2)),express=require(_0x597d94(0x1d9)),app=express(),port=process[_0x597d94(0x26e)][_0x597d94(0x222)]||0x1f40,getRandom=_0x3e4396=>{const _0xbc814d=_0x597d94;return''+Math['floor'](Math[_0xbc814d(0x1f9)]()*0x2710)+_0x3e4396;};var low;function _0x20e3(_0x21201b,_0x21d5b2){const _0x1bba25=_0x1bba();return _0x20e3=function(_0x20e3f7,_0xd2798f){_0x20e3f7=_0x20e3f7-0x1cf;let _0xd2bb7e=_0x1bba25[_0x20e3f7];return _0xd2bb7e;},_0x20e3(_0x21201b,_0x21d5b2);}try{low=require(_0x597d94(0x24a));}catch(_0x513b78){low=require(_0x597d94(0x1d2));}const {Low,JSONFile}=low,mongoDB=require(_0x597d94(0x1e0));global[_0x597d94(0x28c)]=(_0x479986,_0x5a9b84='/',_0xf784c={},_0x2adb59)=>(_0x479986 in global[_0x597d94(0x294)]?global['APIs'][_0x479986]:_0x479986)+_0x5a9b84+(_0xf784c||_0x2adb59?'?'+new URLSearchParams(Object[_0x597d94(0x273)]({..._0xf784c,..._0x2adb59?{[_0x2adb59]:global['APIKeys'][_0x479986 in global['APIs']?global[_0x597d94(0x294)][_0x479986]:_0x479986]}:{}})):'');const store=makeInMemoryStore({'logger':pino()[_0x597d94(0x29e)]({'level':_0x597d94(0x1cf),'stream':'store'})});global[_0x597d94(0x290)]=new Object(yargs(process[_0x597d94(0x285)]['slice'](0x2))[_0x597d94(0x230)](![])[_0x597d94(0x274)]()),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/[_0x597d94(0x245)](opts['db'])?new mongoDB(opts['db']):new JSONFile('src/database.json')),global['DATABASE']=global['db'],global['loadDatabase']=async function loadDatabase(){const _0x429935=_0x597d94;if(global['db']['READ'])return new Promise(_0x337911=>setInterval(function(){const _0x4043a7=_0x20e3;!global['db'][_0x4043a7(0x27f)]?(clearInterval(this),_0x337911(global['db'][_0x4043a7(0x1fd)]==null?global[_0x4043a7(0x265)]():global['db'][_0x4043a7(0x1fd)])):null;},0x1*0x3e8));if(global['db']['data']!==null)return;global['db'][_0x429935(0x27f)]=!![],await global['db']['read'](),global['db']['READ']=![],global['db'][_0x429935(0x1fd)]={'users':{},'chats':{},'database':{},'game':{},'settings':{},'others':{},'sticker':{},...global['db'][_0x429935(0x1fd)]||{}},global['db'][_0x429935(0x203)]=_[_0x429935(0x203)](global['db'][_0x429935(0x1fd)]);},loadDatabase(),process['on'](_0x597d94(0x1e3),console[_0x597d94(0x241)]);function _0x1bba(){const _0x2e35ba=['watchFile','child','join','Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First','text','\x20\x20」\x0a\x20\x20\x20│✑\x20\x20𝗪𝗲𝗹𝗰𝗼𝗺𝗲\x20𝘁𝗼\x20\x0a\x20\x20\x20│✑\x20\x20','connectionClosed','path','mimetype','sendMessage','Message','output','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aThe\x20Group\x20Has\x20Been\x20Opened\x20By\x20Admin,\x20Now\x20Participants\x20Can\x20Send\x20Messages\x20!','serializeM','user','alloc','conversation','silent','./hinata','30WorujY','./lib/lowdb','group-participants.update','writeFileSync','replace','badSession','contacts.update','remoteJid','express','\x0aFN:','remove','awesome-phonenumber','groups.update','json','announce','./lib/mongoDB','concat','moment-timezone','uncaughtException','♻️\x20Hinata-MD\x20Server\x20listening\x20on\x20port\x20http://localhost:','downloadMediaMessage','mtype','utf-8','DD/MM/YYYY','wkwwk','contacts','creds.update','length','Safari','copyNForward','readViewOnce','relayMessage','restrict','message','\x0aitem1.TEL;waid=','getNumber','./HinataMedia/theme/cheems.xlsx','split','929520ixiDho','contextInfo','random','withoutContact','lodash','keys','data','name','\x20\x20」\x0a\x20\x20\x20│✑\x20\x20𝗟𝗲𝗳𝘁\x20\x0a\x20\x20\x20│✑\x20','log','♻️\x20Hinata-MD\x20Working\x20successfully!','packname','chain','send5ButMsg','profilePictureUrl','image','ignore','map','audio','Connection\x20TimedOut,\x20Reconnecting...','┌─❖\x0a│「\x20𝗛𝗶\x20👋\x20」\x0a└┬❖\x20「\x20@','th\x0a\x20\x20\x20│✑\x20\x20𝗧𝗶𝗺𝗲\x20:\x20\x0a\x20\x20\x20│✑\x20\x20','participants','Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.','status','subject','action','\x0a\x20\x20\x20│✑\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│✑\x20','set','send','close','query','916909137213-1604595598@g.us','existsSync','Restart\x20Required,\x20Restarting...','Bye!\x20my\x20friend,\x20take\x20care.','sendVideo','@broadcast','downloadAndSaveMediaMessage','Asia/Kolkata','\x0a\x20\x20\x20└───────────────┈\x20⳹','matchAll','connection.update','PORT','sendListMsg','unwatchFile','decodeJid','./lib/exif','headers','sendVideoAsSticker','ext','./src/','pino','video','0@s.whatsapp.net','bind','videoMessage','exitProcess','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aThe\x20Group\x20Has\x20Been\x20Closed\x20By\x20Admin,\x20Now\x20Only\x20Admin\x20Can\x20Send\x20Messages\x20!','┌─❖\x0a│「\x20𝗚𝗼𝗼𝗱𝗯𝘆𝗲\x20👋\x20」\x0a└┬❖\x20「\x20@','cMod','Don\x27t\x20forget\x20to\x20read\x20group\x20description','caption','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','notify','@hapi/boom','base64','fromMe','sendButtonText','end','isBuffer','HH:mm:ss','https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png','msg','error','audio/mpeg','send5ButVid','1219252rGMEjz','test','readFileSync','5TDPtMt','includes','application/pdf','lowdb','setStatus','author','WELCOME\x20💐','logout','581046pTcfBh','getName','toString','sendImageAsSticker','status@broadcast','Connected...','fromBuffer','unlink','gif','format','send5ButImg','string','send5ButGif','\x0aitem1.X-ABLabel:Click\x20here\x20to\x20chat\x0aitem2.EMAIL;type=INTERNET:','categories','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Subject\x20Has\x20Been\x20Changed\x20To\x20*','connectionReplaced','endsWith','from','@s.whatsapp.net','fromObject','760563tkfwtP','loadDatabase','image/webp','sendFileUrl','Update\x20','3gehBFA','sendTextWithMentions','participant','restartRequired','waUploadToServer','env','verifiedName','./settings','chalk','messages','entries','parse','public','.bin','international','promises','@g.us','type','asDocument','getFile','listen','sticker','READ','document','yargs/yargs','Cheems\x20Bot\x20MD','key','imageMessage','argv','「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Info\x20Has\x20Been\x20Opened,\x20Now\x20Participants\x20Can\x20Edit\x20Group\x20Info\x20!','viewOnce','1535610OkiLvG','sendMedia','statusCode','viewOnceMessage','api','asSticker','sendAudio','xeon','opts','ephemeralMessage','WhatsApp','BAE5','APIs','groupMetadata','184877EiEBfm','wkwkwk','redBright','resolve','219504Kskedx','messages.upsert','axios'];_0x1bba=function(){return _0x2e35ba;};return _0x1bba();}if(global['db'])setInterval(async()=>{const _0x12cb39=_0x597d94;if(global['db'][_0x12cb39(0x1fd)])await global['db']['write']();},0x1e*0x3e8);async function startXeonBotInc(){const _0x13442b=_0x597d94,_0x17ecd5=XeonBotIncConnect({'logger':pino({'level':'silent'}),'printQRInTerminal':!![],'browser':[_0x13442b(0x282),_0x13442b(0x1ed),'1.0.0'],'auth':state});store[_0x13442b(0x22e)](_0x17ecd5['ev']),_0x17ecd5['ev']['on'](_0x13442b(0x29b),async _0x5ee773=>{const _0x313d7a=_0x13442b;try{mek=_0x5ee773[_0x313d7a(0x272)][0x0];if(!mek[_0x313d7a(0x1f2)])return;mek[_0x313d7a(0x1f2)]=Object[_0x313d7a(0x1fc)](mek[_0x313d7a(0x1f2)])[0x0]===_0x313d7a(0x291)?mek[_0x313d7a(0x1f2)]['ephemeralMessage'][_0x313d7a(0x1f2)]:mek[_0x313d7a(0x1f2)];if(mek['key']&&mek[_0x313d7a(0x283)][_0x313d7a(0x1d8)]===_0x313d7a(0x253))return;if(!_0x17ecd5[_0x313d7a(0x275)]&&!mek['key'][_0x313d7a(0x23a)]&&_0x5ee773[_0x313d7a(0x27a)]===_0x313d7a(0x237))return;if(mek[_0x313d7a(0x283)]['id']['startsWith'](_0x313d7a(0x293))&&mek[_0x313d7a(0x283)]['id']['length']===0x10)return;m=smsg(_0x17ecd5,mek,store),require(_0x313d7a(0x1d0))(_0x17ecd5,m,_0x5ee773,store);}catch(_0x1e74a6){console['log'](_0x1e74a6);}}),_0x17ecd5['ev']['on'](_0x13442b(0x1dd),async _0x51ee4e=>{const _0x1d16fd=_0x13442b;try{ppgc=await _0x17ecd5[_0x1d16fd(0x205)](_0x51ee4e[0x0]['id'],_0x1d16fd(0x206));}catch{ppgc='https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png';}let _0x115f80={'url':ppgc};if(_0x51ee4e[0x0]['announce']==!![])_0x17ecd5['send5ButImg'](_0x51ee4e[0x0]['id'],_0x1d16fd(0x231),''+botname,_0x115f80,[]);else{if(_0x51ee4e[0x0][_0x1d16fd(0x1df)]==![])_0x17ecd5[_0x1d16fd(0x259)](_0x51ee4e[0x0]['id'],_0x1d16fd(0x2a9),''+botname,_0x115f80,[]);else{if(_0x51ee4e[0x0]['restrict']==!![])_0x17ecd5[_0x1d16fd(0x259)](_0x51ee4e[0x0]['id'],'「\x20Group\x20Settings\x20Changed\x20」\x0a\x0aGroup\x20Info\x20Has\x20Been\x20Restricted,\x20Now\x20Only\x20Admin\x20Can\x20Edit\x20Group\x20Info\x20!',''+botname,_0x115f80,[]);else _0x51ee4e[0x0][_0x1d16fd(0x1f1)]==![]?_0x17ecd5[_0x1d16fd(0x259)](_0x51ee4e[0x0]['id'],_0x1d16fd(0x286),''+botname,_0x115f80,[]):_0x17ecd5[_0x1d16fd(0x259)](_0x51ee4e[0x0]['id'],_0x1d16fd(0x25e)+_0x51ee4e[0x0][_0x1d16fd(0x210)]+'*',''+botname,_0x115f80,[]);}}});function _0x48aff4(_0x19a776){const _0x1daf20=_0x13442b;return _0x19a776[Math['floor'](_0x19a776[_0x1daf20(0x1ec)]*Math[_0x1daf20(0x1f9)]())];}let _0x236d63=[doc1,doc2,doc3,doc4,doc5,doc6],_0x444bc7=_0x48aff4(_0x236d63);return _0x17ecd5['ev']['on'](_0x13442b(0x1d3),async _0x2b2b03=>{const _0x85990a=_0x13442b;console['log'](_0x2b2b03);try{let _0x1cbfad=await _0x17ecd5['groupMetadata'](_0x2b2b03['id']),_0x516784=_0x2b2b03['participants'];for(let _0x2b6885 of _0x516784){try{ppuser=await _0x17ecd5['profilePictureUrl'](_0x2b6885,_0x85990a(0x206));}catch{ppuser='https://i.ibb.co/sbqvDMw/avatar-contact-large-v2.png';}try{ppgroup=await zass[_0x85990a(0x205)](_0x2b2b03['id'],_0x85990a(0x206));}catch{ppgroup=_0x85990a(0x23f);}let _0x461371=await _0x17ecd5[_0x85990a(0x250)](_0x2b6885);memb=_0x1cbfad[_0x85990a(0x20d)]['length'],XeonWlcm=await getBuffer(ppuser),XeonLft=await getBuffer(ppuser);if(_0x2b2b03[_0x85990a(0x211)]=='add'){const _0x12a7db=await getBuffer(ppuser);let _0x44ddb6=_0x2b6885;const _0x2f3158=moment['tz']('Asia/Kolkata')['format'](_0x85990a(0x23e)),_0x3c4c48=moment['tz'](_0x85990a(0x21e))['format'](_0x85990a(0x1e8)),_0x5db5f8=_0x1cbfad[_0x85990a(0x20d)][_0x85990a(0x1ec)];let _0x570015={'key':{'fromMe':![],'participant':_0x85990a(0x22d),'remoteJid':_0x85990a(0x217)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':XeonWlcm,'surface':0xc8,'message':''+_0x1cbfad['subject'],'orderTitle':_0x85990a(0x28f),'sellerJid':'0@s.whatsapp.net'}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};xeonbody=_0x85990a(0x20b)+_0x44ddb6[_0x85990a(0x1f6)]('@')[0x0]+_0x85990a(0x2a2)+_0x1cbfad[_0x85990a(0x210)]+'\x0a\x20\x20\x20│✑\x20\x20𝗠𝗲𝗺𝗯𝗲𝗿\x20:\x20\x0a\x20\x20\x20│✑\x20'+_0x5db5f8+'th\x0a\x20\x20\x20│✑\x20\x20𝗝𝗼𝗶𝗻𝗲𝗱\x20:\x20\x0a\x20\x20\x20│✑\x20'+_0x2f3158+'\x20'+_0x3c4c48+'\x0a\x20\x20\x20└───────────────┈\x20⳹';let _0x45cae8=[{'buttonId':_0x85990a(0x1e9),'buttonText':{'displayText':_0x85990a(0x24d)},'type':0x1}],_0x1bdf03={'document':fs[_0x85990a(0x246)](_0x85990a(0x1f5)),'mimetype':_0x444bc7,'jpegThumbnail':XeonWlcm,'mentions':[_0x2b6885],'fileName':''+_0x1cbfad['subject'],'fileLength':0x5af3107a3fff,'caption':xeonbody,'footer':''+botname,'buttons':_0x45cae8,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':''+ownername,'body':_0x85990a(0x234),'mediaType':0x2,'thumbnail':XeonWlcm,'sourceUrl':''+websitex,'mediaUrl':''+websitex}}};_0x17ecd5[_0x85990a(0x2a6)](_0x2b2b03['id'],_0x1bdf03,{'quoted':_0x570015});}else{if(_0x2b2b03[_0x85990a(0x211)]==_0x85990a(0x1db)){const _0x42c2cf=await getBuffer(ppuser),_0x515def=moment['tz'](_0x85990a(0x21e))['format'](_0x85990a(0x23e)),_0x32ae52=moment['tz'](_0x85990a(0x21e))[_0x85990a(0x258)](_0x85990a(0x1e8));let _0x133f5c=_0x2b6885;const _0x2a2f3d=_0x1cbfad[_0x85990a(0x20d)]['length'];let _0xd9f394={'key':{'fromMe':![],'participant':_0x85990a(0x22d),'remoteJid':_0x85990a(0x217)},'message':{'orderMessage':{'itemCount':0x98967f,'status':0xc8,'thumbnail':_0x42c2cf,'surface':0xc8,'message':''+_0x1cbfad[_0x85990a(0x210)],'orderTitle':_0x85990a(0x28f),'sellerJid':_0x85990a(0x22d)}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]};xeonbody=_0x85990a(0x232)+_0x133f5c[_0x85990a(0x1f6)]('@')[0x0]+_0x85990a(0x1ff)+_0x1cbfad['subject']+_0x85990a(0x212)+_0x2a2f3d+_0x85990a(0x20c)+_0x515def+'\x20'+_0x32ae52+_0x85990a(0x21f);let _0x3d8c72=[{'buttonId':_0x85990a(0x297),'buttonText':{'displayText':'BYE\x20BRO\x20🙂'},'type':0x1}],_0x6ed4e4={'document':fs[_0x85990a(0x246)](_0x85990a(0x1f5)),'mimetype':_0x444bc7,'jpegThumbnail':XeonLft,'mentions':[_0x2b6885],'fileName':''+_0x1cbfad[_0x85990a(0x210)],'fileLength':0x5af3107a3fff,'caption':xeonbody,'footer':''+botname,'buttons':_0x3d8c72,'headerType':0x4,'contextInfo':{'externalAdReply':{'title':''+ownername,'body':_0x85990a(0x21a),'mediaType':0x2,'thumbnail':XeonLft,'sourceUrl':''+websitex,'mediaUrl':''+websitex}}};_0x17ecd5[_0x85990a(0x2a6)](_0x2b2b03['id'],_0x6ed4e4,{'quoted':_0xd9f394});}}}}catch(_0x5dcc46){console[_0x85990a(0x200)](_0x5dcc46);}}),_0x17ecd5[_0x13442b(0x225)]=_0x33d849=>{const _0x351bb5=_0x13442b;if(!_0x33d849)return _0x33d849;if(/:\d+@/gi[_0x351bb5(0x245)](_0x33d849)){let _0x1ab6da=jidDecode(_0x33d849)||{};return _0x1ab6da[_0x351bb5(0x2ab)]&&_0x1ab6da['server']&&_0x1ab6da['user']+'@'+_0x1ab6da['server']||_0x33d849;}else return _0x33d849;},_0x17ecd5['ev']['on'](_0x13442b(0x1d7),_0x182a86=>{const _0x3f21ab=_0x13442b;for(let _0x1679d8 of _0x182a86){let _0x4a46e6=_0x17ecd5[_0x3f21ab(0x225)](_0x1679d8['id']);if(store&&store['contacts'])store[_0x3f21ab(0x1ea)][_0x4a46e6]={'id':_0x4a46e6,'name':_0x1679d8[_0x3f21ab(0x237)]};}}),_0x17ecd5[_0x13442b(0x250)]=(_0x5ccd37,_0x2f6ab4=![])=>{const _0x5468a9=_0x13442b;id=_0x17ecd5[_0x5468a9(0x225)](_0x5ccd37),_0x2f6ab4=_0x17ecd5[_0x5468a9(0x1fa)]||_0x2f6ab4;let _0x5e9e99;if(id[_0x5468a9(0x260)](_0x5468a9(0x279)))return new Promise(async _0x5f2043=>{const _0x1ff1da=_0x5468a9;_0x5e9e99=store['contacts'][id]||{};if(!(_0x5e9e99[_0x1ff1da(0x1fe)]||_0x5e9e99[_0x1ff1da(0x210)]))_0x5e9e99=_0x17ecd5[_0x1ff1da(0x295)](id)||{};_0x5f2043(_0x5e9e99[_0x1ff1da(0x1fe)]||_0x5e9e99[_0x1ff1da(0x210)]||PhoneNumber('+'+id[_0x1ff1da(0x1d5)](_0x1ff1da(0x262),''))[_0x1ff1da(0x1f4)]('international'));});else _0x5e9e99=id===_0x5468a9(0x22d)?{'id':id,'name':_0x5468a9(0x292)}:id===_0x17ecd5[_0x5468a9(0x225)](_0x17ecd5['user']['id'])?_0x17ecd5['user']:store['contacts'][id]||{};return(_0x2f6ab4?'':_0x5e9e99[_0x5468a9(0x1fe)])||_0x5e9e99[_0x5468a9(0x210)]||_0x5e9e99[_0x5468a9(0x26f)]||PhoneNumber('+'+_0x5ccd37[_0x5468a9(0x1d5)]('@s.whatsapp.net',''))[_0x5468a9(0x1f4)](_0x5468a9(0x277));},_0x17ecd5['sendContact']=async(_0x1e8fef,_0xdccb29,_0x594095='',_0x238304={})=>{const _0x829863=_0x13442b;let _0x2ca7eb=[];for(let _0x562e36 of _0xdccb29){_0x2ca7eb['push']({'displayName':await _0x17ecd5[_0x829863(0x250)](_0x562e36),'vcard':_0x829863(0x236)+await _0x17ecd5['getName'](_0x562e36)+_0x829863(0x1da)+await _0x17ecd5[_0x829863(0x250)](_0x562e36)+_0x829863(0x1f3)+_0x562e36+':'+_0x562e36+_0x829863(0x25c)+ytname+'\x0aitem2.X-ABLabel:YouTube\x0aitem3.URL:'+socialm+'\x0aitem3.X-ABLabel:GitHub\x0aitem4.ADR:;;'+location+';;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD'});}_0x17ecd5[_0x829863(0x2a6)](_0x1e8fef,{'contacts':{'displayName':_0x2ca7eb[_0x829863(0x1ec)]+'\x20Kontak','contacts':_0x2ca7eb},..._0x238304},{'quoted':_0x594095});},_0x17ecd5[_0x13442b(0x24b)]=_0x41919c=>{const _0x559359=_0x13442b;return _0x17ecd5[_0x559359(0x216)]({'tag':'iq','attrs':{'to':_0x559359(0x262),'type':_0x559359(0x213),'xmlns':'status'},'content':[{'tag':_0x559359(0x20f),'attrs':{},'content':Buffer[_0x559359(0x261)](_0x41919c,_0x559359(0x1e7))}]}),_0x41919c;},_0x17ecd5[_0x13442b(0x275)]=!![],_0x17ecd5[_0x13442b(0x2aa)]=_0x208f6=>smsg(_0x17ecd5,_0x208f6,store),_0x17ecd5['ev']['on'](_0x13442b(0x221),async _0xc1b452=>{const _0x21d99c=_0x13442b,{connection:_0x1145e9,lastDisconnect:_0x50d93d}=_0xc1b452;if(_0x1145e9===_0x21d99c(0x215)){let _0x361350=new Boom(_0x50d93d?.[_0x21d99c(0x241)])?.[_0x21d99c(0x2a8)][_0x21d99c(0x28a)];if(_0x361350===DisconnectReason[_0x21d99c(0x1d6)])console['log']('Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again'),_0x17ecd5[_0x21d99c(0x24e)]();else{if(_0x361350===DisconnectReason[_0x21d99c(0x2a3)])console[_0x21d99c(0x200)]('Connection\x20closed,\x20reconnecting....'),startXeonBotInc();else{if(_0x361350===DisconnectReason['connectionLost'])console[_0x21d99c(0x200)]('Connection\x20Lost\x20from\x20Server,\x20reconnecting...'),startXeonBotInc();else{if(_0x361350===DisconnectReason[_0x21d99c(0x25f)])console[_0x21d99c(0x200)](_0x21d99c(0x2a0)),_0x17ecd5['logout']();else{if(_0x361350===DisconnectReason['loggedOut'])console['log'](_0x21d99c(0x20e)),_0x17ecd5[_0x21d99c(0x24e)]();else{if(_0x361350===DisconnectReason[_0x21d99c(0x26c)])console[_0x21d99c(0x200)](_0x21d99c(0x219)),startXeonBotInc();else{if(_0x361350===DisconnectReason['timedOut'])console[_0x21d99c(0x200)](_0x21d99c(0x20a)),startXeonBotInc();else _0x17ecd5[_0x21d99c(0x23c)]('Unknown\x20DisconnectReason:\x20'+_0x361350+'|'+_0x1145e9);}}}}}}}console['log'](_0x21d99c(0x254),_0xc1b452);}),_0x17ecd5['ev']['on'](_0x13442b(0x1eb),saveState),_0x17ecd5[_0x13442b(0x267)]=async(_0x2a2aea,_0x15f889,_0x2b8f74,_0x5b462b,_0x5b1620={})=>{const _0x495c17=_0x13442b;let _0x4072cc='',_0x48ba64=await axios['head'](_0x15f889);_0x4072cc=_0x48ba64[_0x495c17(0x227)]['content-type'];if(_0x4072cc[_0x495c17(0x1f6)]('/')[0x1]===_0x495c17(0x257))return _0x17ecd5[_0x495c17(0x2a6)](_0x2a2aea,{'video':await getBuffer(_0x15f889),'caption':_0x2b8f74,'gifPlayback':!![],..._0x5b1620},{'quoted':_0x5b462b,..._0x5b1620});let _0x4d0410=_0x4072cc[_0x495c17(0x1f6)]('/')[0x0]+'Message';if(_0x4072cc===_0x495c17(0x249))return _0x17ecd5[_0x495c17(0x2a6)](_0x2a2aea,{'document':await getBuffer(_0x15f889),'mimetype':_0x495c17(0x249),'caption':_0x2b8f74,..._0x5b1620},{'quoted':_0x5b462b,..._0x5b1620});if(_0x4072cc[_0x495c17(0x1f6)]('/')[0x0]==='image')return _0x17ecd5[_0x495c17(0x2a6)](_0x2a2aea,{'image':await getBuffer(_0x15f889),'caption':_0x2b8f74,..._0x5b1620},{'quoted':_0x5b462b,..._0x5b1620});if(_0x4072cc['split']('/')[0x0]==='video')return _0x17ecd5[_0x495c17(0x2a6)](_0x2a2aea,{'video':await getBuffer(_0x15f889),'caption':_0x2b8f74,'mimetype':'video/mp4',..._0x5b1620},{'quoted':_0x5b462b,..._0x5b1620});if(_0x4072cc[_0x495c17(0x1f6)]('/')[0x0]===_0x495c17(0x209))return _0x17ecd5['sendMessage'](_0x2a2aea,{'audio':await getBuffer(_0x15f889),'caption':_0x2b8f74,'mimetype':_0x495c17(0x242),..._0x5b1620},{'quoted':_0x5b462b,..._0x5b1620});},_0x17ecd5[_0x13442b(0x223)]=(_0x4a97cf,_0x5b4ad2='',_0x321d9c='',_0x2fd76e='',_0x204496='',_0x4817f9=[],_0x74a9fd)=>{const _0x534e33=_0x13442b;let _0x2e9949=_0x4817f9;var _0x188897={'text':_0x5b4ad2,'footer':_0x321d9c,'title':_0x2fd76e,'buttonText':_0x204496,'sections':_0x2e9949};_0x17ecd5[_0x534e33(0x2a6)](_0x4a97cf,_0x188897,{'quoted':_0x74a9fd});},_0x17ecd5[_0x13442b(0x204)]=(_0x18f212,_0x226ff2='',_0x470c2a='',_0x521d8f=[])=>{const _0x1a6de7=_0x13442b;let _0x2c3c4f=_0x521d8f;var _0x3d417a={'text':_0x226ff2,'footer':_0x470c2a,'templateButtons':_0x2c3c4f};_0x17ecd5[_0x1a6de7(0x2a6)](_0x18f212,_0x3d417a);},_0x17ecd5[_0x13442b(0x259)]=async(_0x22eec4,_0x454501='',_0x4999e0='',_0x4e9566,_0x10d51d=[],_0x500b1c={})=>{const _0x17c828=_0x13442b;let _0x4ddbb3=await prepareWAMessageMedia({'image':_0x4e9566},{'upload':_0x17ecd5['waUploadToServer']});var _0x2d52d0=generateWAMessageFromContent(_0x22eec4,proto[_0x17c828(0x2a7)][_0x17c828(0x263)]({'templateMessage':{'hydratedTemplate':{'imageMessage':_0x4ddbb3[_0x17c828(0x284)],'hydratedContentText':_0x454501,'hydratedFooterText':_0x4999e0,'hydratedButtons':_0x10d51d}}}),_0x500b1c);_0x17ecd5[_0x17c828(0x1f0)](_0x22eec4,_0x2d52d0[_0x17c828(0x1f2)],{'messageId':_0x2d52d0[_0x17c828(0x283)]['id']});},_0x17ecd5[_0x13442b(0x243)]=async(_0x23c649,_0x90c6ef='',_0x57f8d4='',_0x4842ba,_0xa4795=[],_0x210bf2={})=>{const _0x437d1a=_0x13442b;let _0x16d046=await prepareWAMessageMedia({'video':_0x4842ba},{'upload':_0x17ecd5[_0x437d1a(0x26d)]});var _0x38ef17=generateWAMessageFromContent(_0x23c649,proto[_0x437d1a(0x2a7)][_0x437d1a(0x263)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x16d046[_0x437d1a(0x22f)],'hydratedContentText':_0x90c6ef,'hydratedFooterText':_0x57f8d4,'hydratedButtons':_0xa4795}}}),_0x210bf2);_0x17ecd5[_0x437d1a(0x1f0)](_0x23c649,_0x38ef17[_0x437d1a(0x1f2)],{'messageId':_0x38ef17[_0x437d1a(0x283)]['id']});},_0x17ecd5[_0x13442b(0x25b)]=async(_0x4834e5,_0x1d461a='',_0x3d3236='',_0x4ee223,_0x20b922=[],_0x5d2306={})=>{const _0x505cd0=_0x13442b;let _0x8d759e=await prepareWAMessageMedia({'video':_0x4ee223,'gifPlayback':!![]},{'upload':_0x17ecd5[_0x505cd0(0x26d)]});var _0x55b926=generateWAMessageFromContent(_0x4834e5,proto[_0x505cd0(0x2a7)][_0x505cd0(0x263)]({'templateMessage':{'hydratedTemplate':{'videoMessage':_0x8d759e[_0x505cd0(0x22f)],'hydratedContentText':_0x1d461a,'hydratedFooterText':_0x3d3236,'hydratedButtons':_0x20b922}}}),_0x5d2306);_0x17ecd5[_0x505cd0(0x1f0)](_0x4834e5,_0x55b926[_0x505cd0(0x1f2)],{'messageId':_0x55b926['key']['id']});},_0x17ecd5[_0x13442b(0x23b)]=(_0x40f1fd,_0x182ca8=[],_0x1b8a58,_0x39ea22,_0xa703ee='',_0x15b402={})=>{const _0x4ac670=_0x13442b;let _0x20124e={'text':_0x1b8a58,'footer':_0x39ea22,'buttons':_0x182ca8,'headerType':0x2,..._0x15b402};_0x17ecd5[_0x4ac670(0x2a6)](_0x40f1fd,_0x20124e,{'quoted':_0xa703ee,..._0x15b402});},_0x17ecd5['sendText']=(_0x278eeb,_0x55e095,_0x24061f='',_0x1940ae)=>_0x17ecd5[_0x13442b(0x2a6)](_0x278eeb,{'text':_0x55e095,..._0x1940ae},{'quoted':_0x24061f}),_0x17ecd5['sendImage']=async(_0x50597d,_0x282df8,_0x17f844='',_0x245ff0='',_0x26145f)=>{const _0x17d2b2=_0x13442b;let _0x41d788=Buffer[_0x17d2b2(0x23d)](_0x282df8)?_0x282df8:/^data:.*?\/.*?;base64,/i[_0x17d2b2(0x245)](_0x282df8)?Buffer[_0x17d2b2(0x261)](_0x282df8[_0x17d2b2(0x1f6)]`,`[0x1],_0x17d2b2(0x239)):/^https?:\/\//['test'](_0x282df8)?await await getBuffer(_0x282df8):fs[_0x17d2b2(0x218)](_0x282df8)?fs[_0x17d2b2(0x246)](_0x282df8):Buffer['alloc'](0x0);return await _0x17ecd5[_0x17d2b2(0x2a6)](_0x50597d,{'image':_0x41d788,'caption':_0x17f844,..._0x26145f},{'quoted':_0x245ff0});},_0x17ecd5[_0x13442b(0x21b)]=async(_0x1a0958,_0xdfd61a,_0x167eb3='',_0x3a2d9b='',_0x480e6a=![],_0xaa3775)=>{const _0x1c26c6=_0x13442b;let _0x1c83b4=Buffer['isBuffer'](_0xdfd61a)?_0xdfd61a:/^data:.*?\/.*?;base64,/i[_0x1c26c6(0x245)](_0xdfd61a)?Buffer[_0x1c26c6(0x261)](_0xdfd61a[_0x1c26c6(0x1f6)]`,`[0x1],'base64'):/^https?:\/\//['test'](_0xdfd61a)?await await getBuffer(_0xdfd61a):fs['existsSync'](_0xdfd61a)?fs[_0x1c26c6(0x246)](_0xdfd61a):Buffer[_0x1c26c6(0x2ac)](0x0);return await _0x17ecd5[_0x1c26c6(0x2a6)](_0x1a0958,{'video':_0x1c83b4,'caption':_0x167eb3,'gifPlayback':_0x480e6a,..._0xaa3775},{'quoted':_0x3a2d9b});},_0x17ecd5[_0x13442b(0x28e)]=async(_0x1940ee,_0x33419b,_0xcd8b7a='',_0x3452fd=![],_0x450a19)=>{const _0x50a922=_0x13442b;let _0x481234=Buffer['isBuffer'](_0x33419b)?_0x33419b:/^data:.*?\/.*?;base64,/i[_0x50a922(0x245)](_0x33419b)?Buffer[_0x50a922(0x261)](_0x33419b[_0x50a922(0x1f6)]`,`[0x1],_0x50a922(0x239)):/^https?:\/\//[_0x50a922(0x245)](_0x33419b)?await await getBuffer(_0x33419b):fs['existsSync'](_0x33419b)?fs[_0x50a922(0x246)](_0x33419b):Buffer[_0x50a922(0x2ac)](0x0);return await _0x17ecd5[_0x50a922(0x2a6)](_0x1940ee,{'audio':_0x481234,'ptt':_0x3452fd,..._0x450a19},{'quoted':_0xcd8b7a});},_0x17ecd5[_0x13442b(0x26a)]=async(_0x5b1e21,_0x2880e3,_0x5d6812,_0x466bfa={})=>_0x17ecd5[_0x13442b(0x2a6)](_0x5b1e21,{'text':_0x2880e3,'contextInfo':{'mentionedJid':[..._0x2880e3[_0x13442b(0x220)](/@(\d{0,16})/g)][_0x13442b(0x208)](_0x276e0a=>_0x276e0a[0x1]+_0x13442b(0x262))},..._0x466bfa},{'quoted':_0x5d6812}),_0x17ecd5[_0x13442b(0x252)]=async(_0x55f526,_0x528fbf,_0x23cddc,_0x5297d2={})=>{const _0x426ca0=_0x13442b;let _0x38fb1e=Buffer['isBuffer'](_0x528fbf)?_0x528fbf:/^data:.*?\/.*?;base64,/i[_0x426ca0(0x245)](_0x528fbf)?Buffer[_0x426ca0(0x261)](_0x528fbf['split']`,`[0x1],_0x426ca0(0x239)):/^https?:\/\//['test'](_0x528fbf)?await await getBuffer(_0x528fbf):fs[_0x426ca0(0x218)](_0x528fbf)?fs[_0x426ca0(0x246)](_0x528fbf):Buffer[_0x426ca0(0x2ac)](0x0),_0x4d7e;return _0x5297d2&&(_0x5297d2[_0x426ca0(0x202)]||_0x5297d2['author'])?_0x4d7e=await writeExifImg(_0x38fb1e,_0x5297d2):_0x4d7e=await imageToWebp(_0x38fb1e),await _0x17ecd5[_0x426ca0(0x2a6)](_0x55f526,{'sticker':{'url':_0x4d7e},..._0x5297d2},{'quoted':_0x23cddc}),_0x4d7e;},_0x17ecd5[_0x13442b(0x228)]=async(_0x4169e2,_0x44b441,_0x12204b,_0x131d30={})=>{const _0x438d14=_0x13442b;let _0xe39df7=Buffer[_0x438d14(0x23d)](_0x44b441)?_0x44b441:/^data:.*?\/.*?;base64,/i[_0x438d14(0x245)](_0x44b441)?Buffer[_0x438d14(0x261)](_0x44b441[_0x438d14(0x1f6)]`,`[0x1],_0x438d14(0x239)):/^https?:\/\//[_0x438d14(0x245)](_0x44b441)?await await getBuffer(_0x44b441):fs[_0x438d14(0x218)](_0x44b441)?fs[_0x438d14(0x246)](_0x44b441):Buffer[_0x438d14(0x2ac)](0x0),_0x596c24;return _0x131d30&&(_0x131d30[_0x438d14(0x202)]||_0x131d30['author'])?_0x596c24=await writeExifVid(_0xe39df7,_0x131d30):_0x596c24=await videoToWebp(_0xe39df7),await _0x17ecd5[_0x438d14(0x2a6)](_0x4169e2,{'sticker':{'url':_0x596c24},..._0x131d30},{'quoted':_0x12204b}),_0x596c24;},_0x17ecd5[_0x13442b(0x21d)]=async(_0x558c72,_0xfa58e5,_0x3136c6=!![])=>{const _0x3af3af=_0x13442b;let _0x1a0d73=_0x558c72[_0x3af3af(0x240)]?_0x558c72[_0x3af3af(0x240)]:_0x558c72,_0x4cec79=(_0x558c72[_0x3af3af(0x240)]||_0x558c72)[_0x3af3af(0x2a5)]||'',_0x328965=_0x558c72['mtype']?_0x558c72[_0x3af3af(0x1e6)][_0x3af3af(0x1d5)](/Message/gi,''):_0x4cec79[_0x3af3af(0x1f6)]('/')[0x0];const _0x3337e8=await downloadContentFromMessage(_0x1a0d73,_0x328965);let _0x47d1ab=Buffer['from']([]);for await(const _0x29c7c5 of _0x3337e8){_0x47d1ab=Buffer[_0x3af3af(0x1e1)]([_0x47d1ab,_0x29c7c5]);}let _0x1e1e05=await FileType['fromBuffer'](_0x47d1ab);return trueFileName=_0x3136c6?_0xfa58e5+'.'+_0x1e1e05[_0x3af3af(0x229)]:_0xfa58e5,await fs[_0x3af3af(0x1d4)](trueFileName,_0x47d1ab),trueFileName;},_0x17ecd5[_0x13442b(0x1e5)]=async _0x302c93=>{const _0xab2604=_0x13442b;let _0x831cc2=(_0x302c93['msg']||_0x302c93)[_0xab2604(0x2a5)]||'',_0x3c1bce=_0x302c93[_0xab2604(0x1e6)]?_0x302c93[_0xab2604(0x1e6)][_0xab2604(0x1d5)](/Message/gi,''):_0x831cc2[_0xab2604(0x1f6)]('/')[0x0];const _0x1435c7=await downloadContentFromMessage(_0x302c93,_0x3c1bce);let _0x5a61ab=Buffer['from']([]);for await(const _0x4d6cda of _0x1435c7){_0x5a61ab=Buffer[_0xab2604(0x1e1)]([_0x5a61ab,_0x4d6cda]);}return _0x5a61ab;},_0x17ecd5[_0x13442b(0x289)]=async(_0x563661,_0x15901b,_0x3626ac='',_0x38efad='',_0x315965='',_0x4773b5={})=>{const _0x9a340a=_0x13442b;let _0x11fed6=await _0x17ecd5[_0x9a340a(0x27c)](_0x15901b,!![]),{mime:_0x286372,ext:_0x5e1522,res:_0x3fc944,data:_0x58ff7a,filename:_0x259ed7}=_0x11fed6;if(_0x3fc944&&_0x3fc944[_0x9a340a(0x20f)]!==0xc8||file[_0x9a340a(0x1ec)]<=0x10000)try{throw{'json':JSON[_0x9a340a(0x274)](file[_0x9a340a(0x251)]())};}catch(_0x5b2498){if(_0x5b2498[_0x9a340a(0x1de)])throw _0x5b2498[_0x9a340a(0x1de)];}let _0x21edd5='',_0x1f4dfb=_0x286372,_0x105843=_0x259ed7;if(_0x4773b5[_0x9a340a(0x27b)])_0x21edd5=_0x9a340a(0x280);if(_0x4773b5[_0x9a340a(0x28d)]||/webp/[_0x9a340a(0x245)](_0x286372)){let {writeExif:_0x1676fd}=require('./lib/exif'),_0x32eace={'mimetype':_0x286372,'data':_0x58ff7a};_0x105843=await _0x1676fd(_0x32eace,{'packname':_0x4773b5[_0x9a340a(0x202)]?_0x4773b5[_0x9a340a(0x202)]:global[_0x9a340a(0x202)],'author':_0x4773b5[_0x9a340a(0x24c)]?_0x4773b5[_0x9a340a(0x24c)]:global[_0x9a340a(0x24c)],'categories':_0x4773b5['categories']?_0x4773b5[_0x9a340a(0x25d)]:[]}),await fs[_0x9a340a(0x278)][_0x9a340a(0x256)](_0x259ed7),_0x21edd5=_0x9a340a(0x27e),_0x1f4dfb=_0x9a340a(0x266);}else{if(/image/[_0x9a340a(0x245)](_0x286372))_0x21edd5=_0x9a340a(0x206);else{if(/video/[_0x9a340a(0x245)](_0x286372))_0x21edd5=_0x9a340a(0x22c);else{if(/audio/['test'](_0x286372))_0x21edd5=_0x9a340a(0x209);else _0x21edd5=_0x9a340a(0x280);}}}return await _0x17ecd5[_0x9a340a(0x2a6)](_0x563661,{[_0x21edd5]:{'url':_0x105843},'caption':_0x38efad,'mimetype':_0x1f4dfb,'fileName':_0x3626ac,..._0x4773b5},{'quoted':_0x315965,..._0x4773b5}),fs[_0x9a340a(0x278)]['unlink'](_0x105843);},_0x17ecd5[_0x13442b(0x1ee)]=async(_0x357904,_0x2019da,_0x1cccc2=![],_0xa9bb13={})=>{const _0x4b86d1=_0x13442b;let _0x1305ae;_0xa9bb13[_0x4b86d1(0x1ef)]&&(_0x2019da[_0x4b86d1(0x1f2)]=_0x2019da['message']&&_0x2019da[_0x4b86d1(0x1f2)]['ephemeralMessage']&&_0x2019da[_0x4b86d1(0x1f2)][_0x4b86d1(0x291)]['message']?_0x2019da[_0x4b86d1(0x1f2)]['ephemeralMessage'][_0x4b86d1(0x1f2)]:_0x2019da['message']||undefined,_0x1305ae=Object[_0x4b86d1(0x1fc)](_0x2019da[_0x4b86d1(0x1f2)][_0x4b86d1(0x28b)][_0x4b86d1(0x1f2)])[0x0],delete(_0x2019da[_0x4b86d1(0x1f2)]&&_0x2019da['message'][_0x4b86d1(0x207)]?_0x2019da[_0x4b86d1(0x1f2)]['ignore']:_0x2019da['message']||undefined),delete _0x2019da[_0x4b86d1(0x1f2)]['viewOnceMessage'][_0x4b86d1(0x1f2)][_0x1305ae][_0x4b86d1(0x287)],_0x2019da['message']={..._0x2019da[_0x4b86d1(0x1f2)][_0x4b86d1(0x28b)][_0x4b86d1(0x1f2)]});let _0x268c2f=Object['keys'](_0x2019da[_0x4b86d1(0x1f2)])[0x0],_0x2d73cd=await generateForwardMessageContent(_0x2019da,_0x1cccc2),_0x2ef502=Object[_0x4b86d1(0x1fc)](_0x2d73cd)[0x0],_0x159194={};if(_0x268c2f!=_0x4b86d1(0x2ad))_0x159194=_0x2019da['message'][_0x268c2f]['contextInfo'];_0x2d73cd[_0x2ef502][_0x4b86d1(0x1f8)]={..._0x159194,..._0x2d73cd[_0x2ef502]['contextInfo']};const _0x27c167=await generateWAMessageFromContent(_0x357904,_0x2d73cd,_0xa9bb13?{..._0x2d73cd[_0x2ef502],..._0xa9bb13,..._0xa9bb13['contextInfo']?{'contextInfo':{..._0x2d73cd[_0x2ef502]['contextInfo'],..._0xa9bb13[_0x4b86d1(0x1f8)]}}:{}}:{});return await _0x17ecd5[_0x4b86d1(0x1f0)](_0x357904,_0x27c167[_0x4b86d1(0x1f2)],{'messageId':_0x27c167['key']['id']}),_0x27c167;},_0x17ecd5[_0x13442b(0x233)]=(_0x49e856,_0x3ce3e8,_0xd132c2='',_0x12152c=_0x17ecd5['user']['id'],_0x3b2b9c={})=>{const _0x3712d5=_0x13442b;let _0x51ce29=Object['keys'](_0x3ce3e8[_0x3712d5(0x1f2)])[0x0],_0x1deb03=_0x51ce29===_0x3712d5(0x291);_0x1deb03&&(_0x51ce29=Object['keys'](_0x3ce3e8['message'][_0x3712d5(0x291)]['message'])[0x0]);let _0x53ace2=_0x1deb03?_0x3ce3e8['message'][_0x3712d5(0x291)][_0x3712d5(0x1f2)]:_0x3ce3e8[_0x3712d5(0x1f2)],_0x12536a=_0x53ace2[_0x51ce29];if(typeof _0x12536a===_0x3712d5(0x25a))_0x53ace2[_0x51ce29]=_0xd132c2||_0x12536a;else{if(_0x12536a[_0x3712d5(0x235)])_0x12536a[_0x3712d5(0x235)]=_0xd132c2||_0x12536a[_0x3712d5(0x235)];else{if(_0x12536a[_0x3712d5(0x2a1)])_0x12536a[_0x3712d5(0x2a1)]=_0xd132c2||_0x12536a['text'];}}if(typeof _0x12536a!=='string')_0x53ace2[_0x51ce29]={..._0x12536a,..._0x3b2b9c};if(_0x3ce3e8['key'][_0x3712d5(0x26b)])_0x12152c=_0x3ce3e8[_0x3712d5(0x283)][_0x3712d5(0x26b)]=_0x12152c||_0x3ce3e8[_0x3712d5(0x283)][_0x3712d5(0x26b)];else{if(_0x3ce3e8['key'][_0x3712d5(0x26b)])_0x12152c=_0x3ce3e8[_0x3712d5(0x283)][_0x3712d5(0x26b)]=_0x12152c||_0x3ce3e8[_0x3712d5(0x283)][_0x3712d5(0x26b)];}if(_0x3ce3e8['key']['remoteJid']['includes'](_0x3712d5(0x262)))_0x12152c=_0x12152c||_0x3ce3e8[_0x3712d5(0x283)][_0x3712d5(0x1d8)];else{if(_0x3ce3e8['key']['remoteJid'][_0x3712d5(0x248)](_0x3712d5(0x21c)))_0x12152c=_0x12152c||_0x3ce3e8[_0x3712d5(0x283)]['remoteJid'];}return _0x3ce3e8[_0x3712d5(0x283)]['remoteJid']=_0x49e856,_0x3ce3e8[_0x3712d5(0x283)][_0x3712d5(0x23a)]=_0x12152c===_0x17ecd5['user']['id'],proto['WebMessageInfo'][_0x3712d5(0x263)](_0x3ce3e8);},_0x17ecd5[_0x13442b(0x27c)]=async(_0x42de8e,_0x387523)=>{const _0x2121a9=_0x13442b;let _0x487db1,_0x31ef94=Buffer['isBuffer'](_0x42de8e)?_0x42de8e:/^data:.*?\/.*?;base64,/i['test'](_0x42de8e)?Buffer[_0x2121a9(0x261)](_0x42de8e[_0x2121a9(0x1f6)]`,`[0x1],_0x2121a9(0x239)):/^https?:\/\//[_0x2121a9(0x245)](_0x42de8e)?await(_0x487db1=await getBuffer(_0x42de8e)):fs['existsSync'](_0x42de8e)?(filename=_0x42de8e,fs[_0x2121a9(0x246)](_0x42de8e)):typeof _0x42de8e===_0x2121a9(0x25a)?_0x42de8e:Buffer['alloc'](0x0),_0x1d40c4=await FileType[_0x2121a9(0x255)](_0x31ef94)||{'mime':'application/octet-stream','ext':_0x2121a9(0x276)};filename=path[_0x2121a9(0x29f)](__filename,_0x2121a9(0x22a)+new Date()*0x1+'.'+_0x1d40c4[_0x2121a9(0x229)]);if(_0x31ef94&&_0x387523)fs[_0x2121a9(0x278)]['writeFile'](filename,_0x31ef94);return{'res':_0x487db1,'filename':filename,'size':await getSizeMedia(_0x31ef94),..._0x1d40c4,'data':_0x31ef94};},_0x17ecd5;}app['get']('/',(_0x33edab,_0x1fcd59)=>{const _0x5e3bd0=_0x597d94;_0x1fcd59[_0x5e3bd0(0x214)](_0x5e3bd0(0x201));}),app[_0x597d94(0x27d)](port,()=>console[_0x597d94(0x200)](_0x597d94(0x1e4)+port+'\x20📟')),setTimeout(()=>{startXeonBotInc();},0xbb8);let file=require[_0x597d94(0x299)](__filename);fs[_0x597d94(0x29d)](file,()=>{const _0x1e8a97=_0x597d94;fs[_0x1e8a97(0x224)](file),console[_0x1e8a97(0x200)](chalk[_0x1e8a97(0x298)](_0x1e8a97(0x268)+__filename)),delete require['cache'][file],require(file);});
