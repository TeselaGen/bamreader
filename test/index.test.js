const path = require('path')
const bamreader = require('../src')

describe('bamreader', function() {
  it('should read a bam file and spit out a json!', function() {
    bamreader(path.join(__dirname, "/arzedaexample.bam")).then((jsonObj) => {
      expect(jsonObj).toEqual([ { name: '1lib573',
      seq: 'NNNNNNNNNNNNNNNTNNNCNNNNNCCGGTNATTTTTTTAAANNTTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATANGAAAGANGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGTGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCATATTGGTCTGTGGCTGGGTCTGGCGGATGCATATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCANGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCNCCCAGTGATTGGCGATACCCCCCTGATTAAACAGGTGCTGGANATTGGAGCNCANACCCTGCTGGTGCCGATGGNGGAAACCNCCNAACAGGCACGCCAACTGGTGAAAGCGATGCACTATCCGCCGAAAGGCATTCNTGGTGNGAGCAATGNCCTGGCNCGTGCGAAACGCTGGAA',
      pos: 41,
      cigar: '604M' },
    { name: '2lib573',
      seq: 'NNNNNNNNNNNTNNNNGCCNCCTCCGGTAATTTTTTTAAAAATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGTGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACNNNNNNNNNNNTNNNNGCCNCCTCCGGTAATTTTTTTAAAAATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGTGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACNNNNNNNNNNNTNNNNGCCNCCTCCGGTAATTTTTTTAAAAATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTTAAAAATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTTTTAATTCGCCAGAAAACATTTACCTAAGGAGGTGTGTATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCTGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCGCCCAGTGATTGGCGATACCGCCCTGATTAAACAGGTGCTGGACATTGGTGCCCAGACCCTGCTGGTGCCGATGGTGGAAACCGCCGAACAGGCACGCCAACTGGTGAAAGCGATGCACTATCCGCCGAAAGGCATTCGTGGTGTTGGCAGTGCCCTGGCTCGTGCGAGCCGCTGGAACACCCTGCCAGGCTATCTGGACCACGCCGATTAACAGATGTGCCTGCTGGTCCAGATTGAAAACAAAGAAGGGCTGGCGAACCTGGATGAAATCGTGGCGGTGGAAGGCGTGGATGGCGTGTTTATTGGTCCAGCGGACCTGAGTGCGGCGATGGGTCACCGTGGCAACCCAGGTCATCCTGAAGTTCAGGCAGCGATTGAAGATGCGATTGTCCGTATTGGTAAAGCGGGCAAAGCGGCAGGTATTCTGTCGGCGGATGAGAAACTGGCACGCCGCTACATTGAACTGGGTGCGGCGTTTGTGGCGGTGGGNCGTGGATACCACCGTGCTGATTCGTGGTCTNCGNGAACTGNNGNGTAAGTTCAAAGATACCNTTGTGGTGCCGTCTGCGGGTGGCGGTGCGTATTAANGGTATCAGATANTAGTAANAAGTAAGGAGNAANGATGAGTNNNNCCNTGGNNNCCNNNTTGGNNNAACGCCNGGNTCANANTTNGNNCTGAANNNNNNATTNCNNNNGGNGNNGNNNNTN',
      pos: 0,
      cigar: null },
    { name: '4lib573',
      seq: 'NNNNNNNNNNNNNNNNNNNCTCCGGNNNTTTTTTANNATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGGGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCGCCCAGTGATTGGCGATACCGCCCTGATTAAACAGGTGCTGGACATTGGTGCCCAGACCCTGCTTGTGCCGATGGTGGAAACCGCCGAACAGGCACGCCAACTGGTTAAAGCGATGCACTATCCGCCGAAAGGCATTCGTGGTGTGGGCAGTGCCCTGGCTCGTGCGAGCCGCTGGAACACCCTGCCAGGCTATCTGGACCACGCCGATGAACAGATGTGCCTGCTGGTCCAGATTGAAAACAAAGAAGGGCTGGCGAACCTGGATGAAATCGTGGCGGTGGAAGGCGTGGATGGCGTGTTTATTGGTCCAGCGGACCTGAGTGCGGCGATGGGTCACCGTGGCAACCCAGGTCATCCTGAAGTTCAGGCAGCGATTGAAGATGCGATTGTCCGTATTGGTAAAGCGGGCAAAGCGGCAGGTATTCTGTCGGCGGATGANAAACTGGCACGCCGCTACATTGAACTGGGTGCGGCGTTTGTGGCGGTGGGCGTGGATACCACCGTGCTGATGCGTGGTCTGCGTGAACTGNCGGGTAAGTTCAAAGATACCGTTGTGGTGCCGTCTGCGGGTGGCGGTGCGTATTAANGGTATCANATANTANTNAGAANTACGGGAGNNAGATGAGTTNNNNCGGTGGGNNCCTANTTNGGCNNNACNNCNGGGTNNNAATTNNNNNNGAAACNNNN',
      pos: 45,
      cigar: '34M2D1020M1I11M1I23M2I16M' },
    { name: '5lib573',
      seq: 'GNNNNNNNNNNNNNNNNNNNNCTCCGGNNNTTTTTTNNNATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAAGACGCGCATTTGTTATCATCAGCGCTCAACGGGTGTGCTTCCCGTTCTGATGAGTCCGTGAGGACGAAAGCGCCTCTACAAATAATTTTGTTTAATTCGCCAGAAAACATTTACCTAAGGTGGTGTATATGCCAATCAACCATTTCAAACGCCGCTTACATTCAGGAGAACCGCAGATTGGTCTGTGGCTGGGTCTGGCGGATGCGTATTGTGCGGAACTGGCGGCAAATGCGGGCTTTGATTGGCTGCTTATTGATGGCGAGCACGCCCCGAATGACCTGCGTGGTATGCTGGCACAACTTCAGGCGGTGGCACCGTATCCGTCACAGGCGGTGATTCGCCCAGTGATTGGCGATACCGCCCTGATTAAACAGGTGCTGGACATTGGTGCCCAGACCCTGCTGGTGCCGATGGTGGAAACCGCCGAACAGGCACGCCAACTTGTGAAAGCGATGCACTATCCGCCGAAAGGCATTCGTGGTGTGGGCAGTGCCCTGGCTCGTGCGAGCCGCTGGAACACCCTGCCATGCTATCTGGACCACGCCGATGAACAGATGTGCCTGCTGGTCCAGATTGAAAACAAAGAAGGGCTGGCGAACCTGGATGAAATCGTGGCGGTGGAAGGCGTGGATGGCGTGTTTATTGGTCCAGCGGACCTGAGTGCGGCGATGGGTCACCGTGGCAACCCAGGTCATCCTGAAGTTCAGGCAGCGATTGAAGATGCGATTGTCCGTATTGGTAAAGCGGGCAAAGCGGCAGGTATTCTGTCGGCGGATGAGAAACTGGCACGCCGCTACATTTAACTGGGTGCGGCGTTTGTGGCGGTGGGCGTGNATACCACCGTGCTGAGNNNNNNNNNNNNNNNNNNNNCTCCGGNNNTTTTTTNNNATTTTCTGAACTCTTTCTTCCCAGGCGAGTCTGAGTATATGAAATCGNNNNGT',
      pos: 43,
      cigar: '36M2D917M3I17M7I2M1I6M5I4M1D6M12I8M' },
    { name: '9lib578',
      seq: 'NTGTAAGTCGTGAAAAAANCNNNCATATTNCGGAGGTAAAAATGAAAATCACCGTGCTGGGTNGNGGTGNTCTGGGTCAACTGTNGCTGACCGCCCTGTGTAAACAGGGTCACGAAGTTCAGGGTTGGCTGCGTGTGCCGCAGCCNTATTGCTCTGTGAATCTGGTGGAAACCGATGGCAGCATTTTCAACGAAAGCCTGACGGCGAACGACCCTGATTTCCTGGCGACCAGCGATTTACTGCTGGTGACCNTGAAAGCGTGGCAGGTGAGCGATGCGGTGAAAAGCCTGGCGTCTACCCTGCCAGTGACCACGCCGATTCTGCTGATTCATAACGGTATGGGCACCATTGAAGAGTTACAGAACATTCAGCAACCACTGCTGATGGGCACCACGACCCACGCAGCCCGCCGTGATGGCAATGTGATTATTCACGTTGCCAATGGCATTACCCACATTGGTCCAGCCCGCCAGCAGGATGGCGATTATTCCTATCTGGCGGACATTCTCCAGACCGTTCTGCCCGATGTTGCCTGGCACAATAACATCCGTGCGGAACTGTGGCGTAAACTGGCGGTGAACTGCGTTATCAACCCGCTGACCGCCATTTGGAACTGCCCGAACGGCGAACTGCGTCACCATCCGCAGGAGATTATGCAGATTTGCGAAGAGGTGGCGGCAGTGATTGAGCGTGAAGGTCATCACACCTCGGCGGAAGACCTGCGTGATTATGTGATGCAGGTTATTGATGCCACCGCCGAAAACATCAGCAGTATGCTTCAGGACATTCGTGCCCTGCGTCATACCGAAATAGATTACATCAACGGCTTTCTGTTGCGTCGTGCCCGTGCTCACGGCATTGCGGTGCCTGAAAACACCCGCCTGTTTGAAATGGTGAAGCGTAAGGAAAGCGAATACGAACGCATCGGCACGGGTCTGCCTCGTCCGTGGTAATTCAGCCAAAAAACTTAAGACCGCCGGTCTTGTCCACTACCTTGCAGTAATGCGGTGGACAGGATCGGCGGTTTTCNTTTCTCTTCTCAATACAAATGAAAGTACATAGAAATTACTCGGTACCAAATTCCAGAAAAGAGCNNNNNNNNNNNNNNNNNNN',
      pos: 2790,
      cigar: '1113M' } ])
    })
  })
})