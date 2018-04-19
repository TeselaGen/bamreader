const BAMReader = require("./bamreader");


function readBAM(providedPath) {
    return new Promise((resolve, reject) => {
        let seqReads = [];
        // tempBowtie2alignmentsortedbam.bam
        // "../test/arzedaexample.bam"
        BAMReader.create(providedPath).on("bam", function(bam, dOffset, iOffset){
            let bamSeqRead = {
                name: bam.qname,
                seq: bam.seq,
                pos: bam.pos,
                cigar: bam.cigar
            }
            seqReads.push(bamSeqRead)
            // seqReads should be an array of objects [{name, seq, pos, cigar}, {name, seq, pos, cigar}, ...]
            return seqReads;
        }).on("end", function() {
            resolve(seqReads)
        });
    })
}

module.exports = readBAM;