const YumCredit = artifacts.require("./YumCredit.sol");

contract('YumCredit', accounts => {
    var owner = accounts[0]
    let credits

    beforeEach(async function () {
        credits = await YumCredit.new({ from: owner });
    })

    it('test it stores pantry name', async function () {
        credits.setPantry("Irving Park Pantry")
        const pantry = await credits.getPantry();
        assert.equal(pantry, "Irving Park Pantry")
    })
})