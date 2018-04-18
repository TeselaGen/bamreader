// require bamreader from src
// module.exports = function readbam(path/to/file) { return Promise { bamreader.create(filename).on ... .end reject/resolve }}
// bamreader.create

// const BAMReader = require("../src/bamreader");

// const childProcess = require("child_process");
const BAMReader = require("./bamreader");

// console.log("hi")

function readBAM() {
    // return new Promise((resolve, reject) => {
        let seqReads = [];
        // tempBowtie2alignmentsortedbam.bam
        // "../test/arzedaexample.bam"
        BAMReader.create(__dirname + "/arzedaexample.bam").on("bam", function(bam, dOffset, iOffset){
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
            console.log(seqReads)
        });
        // .end()
        // childProcess.exec(
        //     (err, stdout, stderr) => {
        //         if (err) {
        //             return reject(err);
        //         }
        //         resolve(seqReads);
        //     }
        // );
    // });
}

module.exports = readBAM;
readBAM();