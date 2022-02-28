const os = require('os');
// console.log('🚀 ~ file: pcRamUsage.ts ~ line 2 ~ os', os)

setInterval(() => {
	const { arch, platform, totalmem, freemem } = os;

	const bytesToMegaBytes = (val) => Math.round(val / (1024 * 1024));
	const tRam = bytesToMegaBytes(totalmem());
	const fRam = bytesToMegaBytes(freemem());
	const perceptualUsage = 100 * fRam / tRam;

	const stats = {
		OS: platform(),
		Arch: arch(),
		TotalRAM: `${tRam} MB`,
		FreeRAM: `${fRam} MB`,
		Usage: `${perceptualUsage.toFixed(2)}%`
	};

	console.clear();
	console.log('🚀 ~ file: pcRamUsage.ts ~ line 12 ~ stats');
	console.table(stats);

	exports.stats = stats;
}, 1000);