const BAMLineReader = require("./bamreader");

function readBAM(providedPath) {
  return new Promise((resolve, reject) => {
    let seqReads = [];
    BAMLineReader.create(providedPath)
      .on("bam", function(bam, dOffset, iOffset) {
        seqReads.push({
          name: bam.qname,
          seq: bam.seq,
          pos: bam.pos,
          cigar: bam.cigar,
          reversed: bam.reversed
        });
        // seqReads should be an array of objects [{name, seq, pos, cigar, reversed}, {name, seq, pos, cigar}, ...]
        return seqReads;
      })
      .on("end", function() {
        resolve(seqReads);
      });
  });
}

module.exports = readBAM;
module.exports.BAMLineReader = BAMLineReader;
