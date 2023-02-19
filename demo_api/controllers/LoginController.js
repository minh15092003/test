
module.exports = {
    post: (req, res) => {
        console.log('res', req.body)
        const { username, password } = req.body;
        console.log(username, password);
        if (!username || !password) {
            return res.status(400)
                .json({
                    message: "username hoac password la bat buoc",
                    data: false
                })

        } else if (username === "minhtv" && password === "9999") {
            return res.json({
                message: "login thanh cong",
                data: true,

            });
        } else {
            return res.status(405).json({
                message: "username hoac password khong dung",
                data: false
            })
        }
    }
}

