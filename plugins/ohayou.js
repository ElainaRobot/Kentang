import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	let vn = "./media/ohayo1.mp3";
	conn.sendFile(m.chat, vn, "ohayo1.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(ohayou|ohayo|pagi)$/i;
handler.command = new RegExp();

export default handler;
