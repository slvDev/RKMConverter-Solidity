const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = ethers;

describe("Converter", function() {
    let converter

    beforeEach(async () => {
        const Converter = await ethers.getContractFactory("Converter")
        converter = await Converter.deploy()
        await converter.deployed()
    })

    it("Check num from 0 to 10**3", async function() {
        expect(await converter.convert(0)).to.eq("00000")
        expect(await converter.convert(1)).to.eq("00001")
        expect(await converter.convert(5)).to.eq("00005")
        expect(await converter.convert(54)).to.eq("00054")
        expect(await converter.convert(567)).to.eq("00567")
        expect(await converter.convert(999)).to.eq("00999")
    });
    
    it("Check num from 10**3 to 10**6(kilo)", async function() {
        expect(await converter.convert(1000)).to.eq("1K000")
        expect(await converter.convert(1001)).to.eq("1K001")
        expect(await converter.convert(1985)).to.eq("1K985")
        expect(await converter.convert(76543)).to.eq("76K54")
        expect(await converter.convert(982553)).to.eq("982K5")
        expect(await converter.convert(999999)).to.eq("999K9")
    });
    
    it("Check num from 10**6 to 10**9(mega)", async function() {
        expect(await converter.convert(1000000)).to.eq("1M000")
        expect(await converter.convert(1000001)).to.eq("1M000")
        expect(await converter.convert(1800000)).to.eq("1M800")
        expect(await converter.convert(19500000)).to.eq("19M50")
        expect(await converter.convert(145800000)).to.eq("145M8")
        expect(await converter.convert(999999999)).to.eq("999M9")
    });
    
    it("Check num from 10**9 to 10**12(giga)", async function() {
        expect(await converter.convert(1000000000)).to.eq("1G000")
        expect(await converter.convert(1000000001)).to.eq("1G000")
        expect(await converter.convert(1900000000)).to.eq("1G900")
        expect(await converter.convert(16500000000)).to.eq("16G50")
        expect(await converter.convert(112500000000)).to.eq("112G5")
        expect(await converter.convert(999999999999)).to.eq("999G9")
    });
    
    it("Check num from 10**12 to 10**15(teta)", async function() {
        expect(await converter.convert(1000000000000)).to.eq("1T000")
        expect(await converter.convert(1000000000001)).to.eq("1T000")
        expect(await converter.convert(1200000000000)).to.eq("1T200")
        expect(await converter.convert(18900000000000)).to.eq("18T90")
        expect(await converter.convert(148600000000000)).to.eq("148T6")
        expect(await converter.convert(999999999999999)).to.eq("999T9")
    });
    
    it("Check num from 10**15 to 10**18(peta)", async function() {
        expect(await converter.convert(1000000000000000)).to.eq("1P000")
        expect(await converter.convert(1000000000000001)).to.eq("1P000")
        expect(await converter.convert(1500000000000000)).to.eq("1P500")
        expect(await converter.convert(BigNumber.from('82500000000000000'))).to.eq("82P50")
        expect(await converter.convert(BigNumber.from('952500000000000000'))).to.eq("952P5")
        expect(await converter.convert(BigNumber.from('999999999999999999'))).to.eq("999P9")
    });
    
    it("Check num from 10**18 to 10**21(exa)", async function() {
        expect(await converter.convert(BigNumber.from('1000000000000000000'))).to.eq("1E000")
        expect(await converter.convert(BigNumber.from('1000000000000000001'))).to.eq("1E000")
        expect(await converter.convert(BigNumber.from('6500000000000000000'))).to.eq("6E500")
        expect(await converter.convert(BigNumber.from('84160000000000000000'))).to.eq("84E16")
        expect(await converter.convert(BigNumber.from('349500000000000000000'))).to.eq("349E5")
        expect(await converter.convert(BigNumber.from('999999999999999999999'))).to.eq("999E9")
    });
    
    it("Check num from 10**18 to 10**24(zetta)", async function() {
        expect(await converter.convert(BigNumber.from('1000000000000000000000'))).to.eq("1Z000")
        expect(await converter.convert(BigNumber.from('1000000000000000000001'))).to.eq("1Z000")
        expect(await converter.convert(BigNumber.from('9500000000000000000000'))).to.eq("9Z500")
        expect(await converter.convert(BigNumber.from('69800000000000000000000'))).to.eq("69Z80")
        expect(await converter.convert(BigNumber.from('964300000000000000000000'))).to.eq("964Z3")
        expect(await converter.convert(BigNumber.from('999999999999999999999999'))).to.eq("999Z9")
        expect(await converter.convert(BigNumber.from('1000000000000000000000000'))).to.eq("1Y000")
    });

    it("Check num from 10**18 to 10**24(yotta)", async function() {
        expect(await converter.convert(BigNumber.from('1000000000000000000000'))).to.eq("1Z000")
        expect(await converter.convert(BigNumber.from('1000000000000000000001'))).to.eq("1Z000")
        expect(await converter.convert(BigNumber.from('9500000000000000000000'))).to.eq("9Z500")
        expect(await converter.convert(BigNumber.from('69800000000000000000000'))).to.eq("69Z80")
        expect(await converter.convert(BigNumber.from('964300000000000000000000'))).to.eq("964Z3")
        expect(await converter.convert(BigNumber.from('999999999999999999999999'))).to.eq("999Z9")
        expect(await converter.convert(BigNumber.from('1000000000000000000000000'))).to.eq("1Y000")
    });

});
