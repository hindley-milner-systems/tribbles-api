import { makeMerkleTreeAPI } from '../merkle-tree/index.js';

const keys = [
  {
    name: 'airdrop-claimant-185',
    address: 'agoric18w6cepy5l7f77efnh4r4jc326cn7ne49z87zcl',
    pubkey: { key: 'AwDcRK2qUnJq9Hvg2IjfE+IBXucCla9b61XHhpXugPIk' },
  },
  {
    name: 'airdrop-claimant-186',
    address: 'agoric1fqg44x9mzf9pzna9thhsh65hd8jcd79ppe9f8x',
    pubkey: { key: 'Ap/XitqBMgy/GrOz0kgAl9xdFy8R+warIhKaVaTa9Dn9' },
  },
  {
    name: 'airdrop-claimant-187',
    address: 'agoric187d6cm0j2jsrfhavtzystg72mfpt5j7k2uc9w2',
    pubkey: { key: 'A7cvDvgoVlVndNAZSnhh1d0RKhyXuhu/91+gQlCkWQsH' },
  },
  {
    name: 'airdrop-claimant-188',
    address: 'agoric1k4v0xlg3effpal6aq3jym25j3cvwa4vr42845m',
    pubkey: { key: 'AmCK0LxF2dF7raaWIIPm/SDv+qDpNXwPZc3ajF5cr03R' },
  },
  {
    name: 'airdrop-claimant-189',
    address: 'agoric1nkdph8mc46swmkpuqljmfk837406zyu2gf86jq',
    pubkey: { key: 'A/6CTpOy0xeV3Txwo5yvKH7EptDwIASWSU8DmAAWGKJf' },
  },
  {
    name: 'airdrop-claimant-190',
    address: 'agoric1rf9k4ff7nqvxvdx53ymc47nrf5jn7tm2xw80lu',
    pubkey: { key: 'AusFoGw/qDX7tAmHigqfFyfpK+OirK8JG3KayJmkruWi' },
  },
  {
    name: 'airdrop-claimant-191',
    address: 'agoric1q0975fsas3ujw6aleq5h4eg30w9srh0r78k02g',
    pubkey: { key: 'A4nUqa+4cAaINLm2UjocwEdBxw3i7TQZ2ABvgumslIwO' },
  },
  {
    name: 'airdrop-claimant-192',
    address: 'agoric14shtnm97e596pmy632am33lksjcuc5ggfl383u',
    pubkey: { key: 'AtZUlqyJWGqmVJ+Y1uEXlPDn/9HxSUTbyh0kvD0khEDi' },
  },
  {
    name: 'airdrop-claimant-193',
    address: 'agoric1hc5dn223k7kwxwvu8cuyjrc45rzeednu5rvz9n',
    pubkey: { key: 'A5mw2ytvra5xEcmxokmDSiKbtEIBfRJNuSr35VoTk1kH' },
  },
  {
    name: 'airdrop-claimant-194',
    address: 'agoric1x5gwd487ckzje2ttkyn6nxjw9lkejxysah8ru9',
    pubkey: { key: 'A5DPVJbs1vvP+MIUvSor843uK7WN23cO2NMZBvoHaYP5' },
  },
  {
    name: 'airdrop-claimant-195',
    address: 'agoric1qjq7fmhtghfjc7jvssl8e4085gpgu0nl097trr',
    pubkey: { key: 'Az3G6JqFt46iyS95zKO5rbmKF9fbAYNt4Wrn1j7pvK0g' },
  },
  {
    name: 'airdrop-claimant-196',
    address: 'agoric1dvz36w90gw8jnyra5x7zy85dfleh9a3la76hev',
    pubkey: { key: 'Akp7XCFXaCWyYVmqPJ/M2GfuoP44w+qN6BsCfL8jmqO6' },
  },
  {
    name: 'airdrop-claimant-197',
    address: 'agoric1k75pp3cufnefp8qzzu85xy7uxgkalwede2d825',
    pubkey: { key: 'A4gYHowfUNyj41dJrN4cgKmFNQwLmCBHk2DpSkr1vs+S' },
  },
  {
    name: 'airdrop-claimant-198',
    address: 'agoric17jl7w3kmdl489yyg5kj06nrkxpwp2fh0vpwelh',
    pubkey: { key: 'AvKuaNfXiTXmYk7L/XYHhLTUKSFqjoLdgRw38OojqG/O' },
  },
  {
    name: 'airdrop-claimant-199',
    address: 'agoric16wkl3jgeg97zdwyy52w0kcxgmn8uw4w708dh7s',
    pubkey: { key: 'AlLGmhf1UWfHI7EPxhRuiMhwFVfxRyF8CycYpubeKLdk' },
  },
  {
    name: 'airdrop-claimant-200',
    address: 'agoric1hfkdsyfjsq3577ddegz93y0a48tn30vd6qnf92',
    pubkey: { key: 'ApsGHlPcnIWrpQQR2fp2XQ15DnPM+kp3N9AAKW3oGykH' },
  },
  {
    name: 'airdrop-claimant-201',
    address: 'agoric1fjtfgqzwskluwysd26rszctd3s0z3w8af4fjqp',
    pubkey: { key: 'A/BCmBq9AO8cJUggckUEJhlrKmmjHQkKP9dxU6TNjM48' },
  },
  {
    name: 'airdrop-claimant-202',
    address: 'agoric1sr9ywz975ytav73spcjgn23vphnu3t822gflq9',
    pubkey: { key: 'A9lbhzIhl3qUnoeB2u+Bohc7l6Cfu2Uw40JTLGqKFbvN' },
  },
  {
    name: 'airdrop-claimant-203',
    address: 'agoric17vkwlxsfhajdfffduwu83cukw63ngteqdsnz0f',
    pubkey: { key: 'AzAnkXQ/5AZ/hroyjxDLGB6PRNwvaW0Wqfu16wdzSXgy' },
  },
  {
    name: 'airdrop-claimant-204',
    address: 'agoric1djyar5f07z0pkjzqkd6kf9ydwat93m2fuyza9z',
    pubkey: { key: 'AlRntbvmExTKsE7bpuKAETiUb7nvXYjGiAtf8Iv6ynlw' },
  },
  {
    name: 'airdrop-claimant-205',
    address: 'agoric10059aj5ackzluc9tp27rpelkz7dpxxajkw8rky',
    pubkey: { key: 'AhtPcLiW9ag+ERdMn09pZxw9KSoB2N9cMkG3l8HrbUcx' },
  },
  {
    name: 'airdrop-claimant-206',
    address: 'agoric1qdqrvy4x40hfmxg8ndccjdw2nl8ahavpnvxwym',
    pubkey: { key: 'Aho+deQ/wp1DZNVj+MhvnEwHqLYBrdnP1UcZN/Xhtx6z' },
  },
  {
    name: 'airdrop-claimant-207',
    address: 'agoric1dmnjk8708p2r0lawarfjz3sp83snh8wlwdvplf',
    pubkey: { key: 'AjQc3kF3e+yMGNDGIktNJg388y7bL2w/ehvIw39LQVUX' },
  },
  {
    name: 'airdrop-claimant-208',
    address: 'agoric14s956ewasw0ftfnxjrwww6wmfl4g8lpzs337ug',
    pubkey: { key: 'A3RYphCQ0ogtDVHjhhTxShP3bFZk0xVASE271AhYz/n5' },
  },
  {
    name: 'airdrop-claimant-209',
    address: 'agoric1wc3wslugf20he8m76suv9gauhrfrkz3mx23c0v',
    pubkey: { key: 'Ak2NdVFe3tvUIHeVJfbkiixf7oZs4gH41/m5BA+zlZgE' },
  },
  {
    name: 'airdrop-claimant-210',
    address: 'agoric12zecqqfe293v4cqnf7jqkq0xx960jl0djcdxwv',
    pubkey: { key: 'A9KeTm2aZisdmOjiPCqEc7igJDfYLHHFmLtW8xrjHmbc' },
  },
  {
    name: 'airdrop-claimant-211',
    address: 'agoric1nmjv5jhu7geuezqf5a4wq7ylmg6d8fdwjzj8gg',
    pubkey: { key: 'A1ZS+uh+3MuAKt6CbAPjfTno2fHoTojakOuNVWa6fTh1' },
  },
  {
    name: 'airdrop-claimant-212',
    address: 'agoric13pyv42d0wznxmrcaevmu4zekfeqgmvauk4mlmv',
    pubkey: { key: 'AmE8R+0fS46aDPnLKXh3DCsLMyegiYEhKnlzF/9YzW6G' },
  },
  {
    name: 'airdrop-claimant-213',
    address: 'agoric1lpasjn68xydszajlyur40s4m9sumxr8hsmznju',
    pubkey: { key: 'AgrQhoC61xd2UWk36jpu8ZZI41T9dw/K3l51A9CbqxZ7' },
  },
  {
    name: 'airdrop-claimant-214',
    address: 'agoric1apymk0f3v5ny2y7ny9clj4yc9tuv3jhuwa39u2',
    pubkey: { key: 'A6eghH+/+3T0MHd3+Bh/j13suIrTXRqD/n0Md+H72f9S' },
  },
  {
    name: 'airdrop-claimant-215',
    address: 'agoric10wmr22y675uah98ax0yjcyrsgs962x2npepkrf',
    pubkey: { key: 'A8Yj0aARk+tiopy1ZYCc8rt11anoriWBkC/BTqBWc/Hz' },
  },
  {
    name: 'airdrop-claimant-216',
    address: 'agoric180hr4vpcukzhdj0cz7pnyukz7rppj48fnuxn5h',
    pubkey: { key: 'A1orGfFdrXM+XnQSssV41o6pJ5QxP1/eY3amTJ7Z45Kg' },
  },
  {
    name: 'airdrop-claimant-217',
    address: 'agoric14lnfvu5p0xp93d8em23l5tdw7grx55awmqj3j7',
    pubkey: { key: 'Ayug8WQbhVfF6TyWklhXOpX/Q34f2l4rOQdl7j15m4UQ' },
  },
  {
    name: 'airdrop-claimant-218',
    address: 'agoric195mzq6ckmx7gxdhm0qksz6hhm4ywg679fm2k8l',
    pubkey: { key: 'AwWUMS/OIj49BVQ8uKoiZ0nnI5K+EJvCE2GRgImm3XnA' },
  },
  {
    name: 'airdrop-claimant-219',
    address: 'agoric1j3qqlhd9zynp026le0zatws53359pfq9jsgx0j',
    pubkey: { key: 'A2VIpj6v/Q/bRFEUN4qMR8n6M6try2ebXr2tV9JFQGeN' },
  },
  {
    name: 'airdrop-claimant-220',
    address: 'agoric1t9eljlf88ay4mh7the0zg679rhludsmhqdcxuq',
    pubkey: { key: 'AvnbS41JX91Wdr8Pf+2GN1/n81gz5nPVbVAnluYYidAs' },
  },
  {
    name: 'airdrop-claimant-221',
    address: 'agoric1vnc70cgw6ryzklf74wwm6adcwj2wz68c388dfj',
    pubkey: { key: 'Augtopfjjfvges4MGbhf3RXMeXFNnezej0qNji686ass' },
  },
  {
    name: 'airdrop-claimant-222',
    address: 'agoric1mzwj6rey4k7w00ljl5q550q33emt3eme9r06me',
    pubkey: { key: 'As3YVQqiOJeamHmTey3QBY3rDn7kx7Sh9wFW59tf1AwG' },
  },
  {
    name: 'airdrop-claimant-223',
    address: 'agoric1nll9xmuuegkw5wfcgwlx7rmnn59zpg45qek439',
    pubkey: { key: 'A9m1OFN5WTnvNGGesSE+Ig/rbIttLYFpuZZ2eCKfHZWG' },
  },
  {
    name: 'airdrop-claimant-224',
    address: 'agoric1zymfa3f060jgmmtgdcfn9kmlwq5wr9qeetxcag',
    pubkey: { key: 'As+xJF5ZL4x0Tqi1n+k90WKoiDWtpEfG065FYrbcHG6J' },
  },
  {
    name: 'airdrop-claimant-225',
    address: 'agoric1cpncfeyekkfh0pdwqag3f0sx07jwa9vaqqlte0',
    pubkey: { key: 'AomqzGERmcofh7WM1aHVutek5DQKNg1uc38W6PMZTKyx' },
  },
  {
    name: 'airdrop-claimant-226',
    address: 'agoric1jvcgnfjzxyctmws9u7h4f5x9d72yqka2vyxjjc',
    pubkey: { key: 'AtcBinCiI8jX257t0uTDTWFkb+cGiiwPm7aFivpFeSah' },
  },
  {
    name: 'airdrop-claimant-227',
    address: 'agoric1yxchk7vmfueglst3vgk3ns2rmxe89eyy0ktlpq',
    pubkey: { key: 'AqHqMKPS1SeaK1L773+TEoiTsyrlivM/Fg4Ohuq8py7R' },
  },
  {
    name: 'airdrop-claimant-228',
    address: 'agoric1nu5mdkf0jjxhx4ns9fqdulxyq5htfsu3tc6m73',
    pubkey: { key: 'A9y6wwNuv3Rq6ujJxM++HwxmwzKVFzC641VTdSgsD6Cu' },
  },
  {
    name: 'airdrop-claimant-229',
    address: 'agoric1sp77clqfpjmxnkll3g7s842y4ksx7dgua2t49y',
    pubkey: { key: 'AiXMYzL5C5RP499YZ80rbIBboGk6DBTDN2uerwhHA6jd' },
  },
  {
    name: 'airdrop-claimant-230',
    address: 'agoric1wvt3hlt2e2va4l85umfs7lx4jk29gn9enr38qw',
    pubkey: { key: 'AubqdeeC+kJevnKSCqM8qAnQVrDuyWAulyvmAdP60tSq' },
  },
  {
    name: 'airdrop-claimant-231',
    address: 'agoric1mg4penem34dqhajtjedd38cuulw5geg9gn9gmm',
    pubkey: { key: 'Al29AiL7y9uNIG/9T5CfWrS1OfcxApb8OZ/u7bpWA2Au' },
  },
  {
    name: 'airdrop-claimant-232',
    address: 'agoric1f3f80f3t9ahz3wzd929xevjm0rfuynwf8wjed2',
    pubkey: { key: 'AxEM0W3YnEB/psUrf6DIPi0C4kmhT8RXm6wVH8ccmnQT' },
  },
  {
    name: 'airdrop-claimant-233',
    address: 'agoric1y8mjwe7fgvgcgwfu0h0ct4zwhjjytrz735qtql',
    pubkey: { key: 'A42YwgKJqY1APUs+gw1WeOu5phiJBdteNfQt1EcjKerL' },
  },
  {
    name: 'airdrop-claimant-234',
    address: 'agoric1fnnwptpw4ctpy67289me0z5xlu308x4utwandk',
    pubkey: { key: 'Anw+RpmIzl68S9qzwcZGrgcq3JB4hATvBn+Zari4KAco' },
  },
  {
    name: 'airdrop-claimant-235',
    address: 'agoric1dasyweczmnzr8yqpyl3kl4wv97dc8xar4t2fwx',
    pubkey: { key: 'AsW2Zr3CbgmS+mJaznid0Ek7kgYKf72N0RhzJzaz5dit' },
  },
  {
    name: 'airdrop-claimant-236',
    address: 'agoric18l85emcp2ztwykew4v75xmtycvsz96xrzdjd7k',
    pubkey: { key: 'A+dK2OnCIrH3GhVRUwjBMFGEpx5cUpgxIWEkgerB7lJR' },
  },
  {
    name: 'airdrop-claimant-237',
    address: 'agoric1j6xz6fwz6vfpclu89usres2fuheqfgxlqzlyf6',
    pubkey: { key: 'A3gVqr6h+YqNaMkYmePRmvmMhMi+rSLsIUqf8akWbmiZ' },
  },
  {
    name: 'airdrop-claimant-238',
    address: 'agoric1cd8cctre6jc8ent3chtauq73jc3qzh8djckusu',
    pubkey: { key: 'ArDgrnch9y4Lis8JyadffU4ZXvUt2MP07SD6xr5o5JNG' },
  },
  {
    name: 'airdrop-claimant-239',
    address: 'agoric1e0vned7drjw50a6f4eqyqduxgguvtfzexl5y23',
    pubkey: { key: 'A1ss7wEJETN0uVdV/g3wo2DqFKbw79qA2VX8QS5f0gOz' },
  },
  {
    name: 'airdrop-claimant-240',
    address: 'agoric1dr5ydu3x8e9wms05ejtjm2ha035lrclvucnkv7',
    pubkey: { key: 'A4K75n7ImETDw1Ibhnb3VCZHsP2l3jvXIMHAFIUAaCQT' },
  },
  {
    name: 'airdrop-claimant-241',
    address: 'agoric1eapajjw2wwt9ggc6tjj0tucetk2r9x3z4p6wxl',
    pubkey: { key: 'Aht9rzE2GPtQ7XPRDGXMQYBVG0xWLCTrX1GC56/9NUN9' },
  },
  {
    name: 'airdrop-claimant-242',
    address: 'agoric1t0xtx6kvwwvrnk454w9v9rvtsaa59t968whf35',
    pubkey: { key: 'AkuzpZFjRr2RU/fn367Pt+h9c0DzVKd2vKB7+nwNFrWC' },
  },
  {
    name: 'airdrop-claimant-243',
    address: 'agoric1jm0hdhzjxfckktx072fxnwt9x65l5fvqwxe2jc',
    pubkey: { key: 'A6BmexpbrioTtB5v7dQV/W61lG1rDcPucGSYJ1JBOuiM' },
  },
  {
    name: 'airdrop-claimant-244',
    address: 'agoric1d45e659xlqnns0j0eg2qxa5rl37qhzl6k78ef3',
    pubkey: { key: 'AkbMYp6LlE+s+kz0Vqdpkzd62mZyLjj/uBlFXGo5aRmn' },
  },
  {
    name: 'airdrop-claimant-245',
    address: 'agoric1an0dz905kexh0s6sughts6gruxl54wkzqcgl0h',
    pubkey: { key: 'A9jV4XClmf3XJEwKzCGT9UOH/eSxxk6jpPR61+5/A9F7' },
  },
  {
    name: 'airdrop-claimant-246',
    address: 'agoric1weupzhvxep8w84cys299yppyyzjnk8qdr46cs9',
    pubkey: { key: 'A2dasassYeCsx6sP2dLXMJK+aA9NnHPf1WAkSoLyn+6t' },
  },
  {
    name: 'airdrop-claimant-247',
    address: 'agoric14tqux0p785eaqkncw6s8pf9mefu793twshdmhs',
    pubkey: { key: 'Ao7AkUh2iJkEsmp0Qdi7fz8k2rPsljHb98LH8ozSdVyT' },
  },
  {
    name: 'airdrop-claimant-248',
    address: 'agoric1h682h2736gdmtjhkxsznmwchhrkvyvfdtn3cx8',
    pubkey: { key: 'A6cuxEvC+a/f86daWEGIsrw/899oaoUO6ZcZQ7o/1t9/' },
  },
  {
    name: 'airdrop-claimant-249',
    address: 'agoric1nf46ykhq0x0pphtypra237klgakda659kcjze5',
    pubkey: { key: 'A5pm+Fg4cnKeqGI5mCrCJLSk22adoicNCsoUSd1CbsKB' },
  },
  {
    name: 'airdrop-claimant-250',
    address: 'agoric17j44grzj83jnmfppx9v4w60nrz0djtnrxd3hhc',
    pubkey: { key: 'Ax0Y3X5//vzjyRhcd+Y9ezBpCW+MW7invPUcpF8CsDC6' },
  },
  {
    name: 'airdrop-claimant-251',
    address: 'agoric16hgkxzlxsn7gjxd3ldurr3mfs9qnzewpqrfm88',
    pubkey: { key: 'A1cb8oiCmO2iLD9/BEiyepy+0DlbBUzTl4ZK+zia/Myd' },
  },
  {
    name: 'airdrop-claimant-252',
    address: 'agoric1mf3k374c4zalzta48cswrwlwhkfns2leuh8v26',
    pubkey: { key: 'A++D7+7wbrn9afbRwirukZfahDlGEnmnxfAEQamvoiSZ' },
  },
  {
    name: 'airdrop-claimant-253',
    address: 'agoric16mmc0ex6rcghw8vjn8lveguudlwjyx669kumj3',
    pubkey: { key: 'Agh9U+VAtuptzk0/6zVHOA0Ng/1RdRZZ9Q97K0WFn1ef' },
  },
  {
    name: 'airdrop-claimant-254',
    address: 'agoric16pqaes5xvtrvfx326e22hqcqp3hc3tvvr54uwd',
    pubkey: { key: 'AjeoeDbDdWgZSSVJEMtLWKXTsU5YWiYwUfSI+SsH/G+5' },
  },
  {
    name: 'airdrop-claimant-255',
    address: 'agoric107dq0r4l4sp87lfw6f5zanty0njf58dp49055c',
    pubkey: { key: 'AvDTB8wat6Ji0RosC591S302m4DkvG/F1OVMsvF4JnF8' },
  },
  {
    name: 'airdrop-claimant-256',
    address: 'agoric1r0twfneem8gdu50dtwfvhy23dxvy39nqt25l3j',
    pubkey: { key: 'ArmtexhWq29xTvyQuqhdlEOfom2WVl9hy1k5N2oeF9GQ' },
  },
  {
    name: 'airdrop-claimant-257',
    address: 'agoric1y2hkwee4m6mwp7cz8y6czh0cnlev9xu0x40aa7',
    pubkey: { key: 'AxYfJR7EQRq+CVfQmgLnOS8e8wu8rwBjGldOqGtk7udp' },
  },
  {
    name: 'airdrop-claimant-258',
    address: 'agoric1ad9ecv5v0de87ls3tmtft0vt9vm5zg6rmv9muv',
    pubkey: { key: 'Ai6bV2SwFyHInTzw1SccOdP4Fiv/e7AxFYxP7CABw80Y' },
  },
  {
    name: 'airdrop-claimant-259',
    address: 'agoric1scyw3wejthwh0ha8w4alm2gr20rnycurmsct75',
    pubkey: { key: 'A5QtulH0bhsSUGsZfO+/xaEHRzv6PowbSr5NFxAs5xlo' },
  },
  {
    name: 'airdrop-claimant-260',
    address: 'agoric1qkzv5p3f3wnf03y9vdw7c25dckh22y2xrvw5my',
    pubkey: { key: 'Awt9z3DsRb5EY1um1JFb+DtiopHvowObn8W4+/SskgsP' },
  },
  {
    name: 'airdrop-claimant-261',
    address: 'agoric1wch86287pykmy09d05hsscj7jaw48p0rs79sd8',
    pubkey: { key: 'Ay5OulCYUffpoKURFXAQ5QcqEKxkNIPhF/u3qyjKkqKa' },
  },
  {
    name: 'airdrop-claimant-262',
    address: 'agoric17qw8fnxg09ak0t8ac05rlyyhggmnqrm3eg4aq7',
    pubkey: { key: 'Ai0VrFaFF7KLYACMdGcXtcZaAz3mXOW3kdD4FJbmeo9L' },
  },
  {
    name: 'airdrop-claimant-263',
    address: 'agoric1kfvmnttw32rkcgnstsgr4qjj878kwps8l92gwx',
    pubkey: { key: 'A5l7S9YjAdYXW+auA5xUdB12LqqcuPtCj5dNk+rCyM1n' },
  },
  {
    name: 'airdrop-claimant-264',
    address: 'agoric1k88429025gpdpd5txxtxwplzzafvdvknrn7gcq',
    pubkey: { key: 'A9gzRN3sfyMVDzrQuNJu7MRe8FW/cmVMqAKD1eMKfwsE' },
  },
  {
    name: 'airdrop-claimant-265',
    address: 'agoric1xrrt3u6uprgcjryzemhg460je26ey9gnwm2au8',
    pubkey: { key: 'A6liDPILO8tiUl75G4+PL1xpJa6SFSTBTW1nIkHsqqiY' },
  },
  {
    name: 'airdrop-claimant-266',
    address: 'agoric1y7gyqqap3ptglaxx34p6m7zhq6fhtx3z9ktzvs',
    pubkey: { key: 'AldTmq2DbBu3Y7XnMwwwESctd85SjjYvCLa/ANyMlXGW' },
  },
  {
    name: 'airdrop-claimant-267',
    address: 'agoric1tsy3lz2xncmhjaft2yn2aspj2v5xsv3aty93l4',
    pubkey: { key: 'A8pfy8h6hntRJM26OM5Tq38cS7U8lpIphRK4XJ6m6nqf' },
  },
  {
    name: 'airdrop-claimant-268',
    address: 'agoric1rlen20w55r489tuzvhwm79t3u7mxlx7wj2args',
    pubkey: { key: 'A8en1URBuoaWOF9+Zo/JzIxxvO8z88Jgwp3y+LWrFt/r' },
  },
  {
    name: 'airdrop-claimant-269',
    address: 'agoric19aspftm37d3739ncnuqkwl648gl4s7ln97f20n',
    pubkey: { key: 'AjKwWzEpGeNeWG3bsZmWMALfc7TA6cMs7SysLtxT/9Ca' },
  },
  {
    name: 'airdrop-claimant-270',
    address: 'agoric1pfvjg0t6cyhw6u92jjcduqq53jfmup4fw9sw4g',
    pubkey: { key: 'A8Am1BgX09SiH5b6gpE9f+KOV/89SXRVncbUJVzGQWk1' },
  },
  {
    name: 'airdrop-claimant-271',
    address: 'agoric16jkjlh2m2gud9c8vnhn8tz2wdrr0m5f9zs90qa',
    pubkey: { key: 'A1yUU/JU8s+F29E48qcdrVCnJmqHuVZXoOQMKmlr7Cim' },
  },
  {
    name: 'airdrop-claimant-272',
    address: 'agoric1dgaw7wtxk675llfpf6nkdhvfxe24kfn9fma29u',
    pubkey: { key: 'ArYitvrE71Y4q7yqnH8BDJjEZD5uLfs35FX7kDvucWp3' },
  },
  {
    name: 'airdrop-claimant-273',
    address: 'agoric1wlcvlskxjv8lp7rr5xtqkqla0t0vadjvfsgwwt',
    pubkey: { key: 'Aq6iKyN8/wsydcTlJIteOxP4drvgC2hvroYU5bxTRrEi' },
  },
  {
    name: 'airdrop-claimant-274',
    address: 'agoric166yhpxknq44dnhpf5u9ckspcyyngz77kyt3m4t',
    pubkey: { key: 'A0w0kqXwwdhLaKylV0WHcLXI3fnrdPzzMNB1YzIAjU2x' },
  },
  {
    name: 'airdrop-claimant-275',
    address: 'agoric1kw7t8u8h2h6qpjqukm4hy44s96h6zaer683zzn',
    pubkey: { key: 'Avj/V45gdtRTvZuEfae712NC4sJwB9Qd3n2lsdxkqWmK' },
  },
  {
    name: 'airdrop-claimant-276',
    address: 'agoric1wjlj4v4v69xje6n78xf2u0rqadugwqzj3qmmpg',
    pubkey: { key: 'AjcfI00ZMlzTWvwhnEcuZngPt4K8o8XNU2aaYx29XCJm' },
  },
  {
    name: 'airdrop-claimant-277',
    address: 'agoric1nff3wac3kpk5r85mcznuz4f599yahva7leum4m',
    pubkey: { key: 'A9jOPDczwClJsGcHeRXwQyilIIVxUGv3wP6OyaRQtqqB' },
  },
  {
    name: 'airdrop-claimant-278',
    address: 'agoric1z8jv020vwllw53vu0m2wkld9kad0ntlcqfg049',
    pubkey: { key: 'Akkvzue2N6madj5z6doEpVKjx3T0yVI1jO6DSxX69Gdu' },
  },
  {
    name: 'airdrop-claimant-279',
    address: 'agoric1dq2j7et57rwmul35wr5v3xephrhnanqrwc0utt',
    pubkey: { key: 'AlepHFsV1IpKWO0AD8gZbu/yu/Iu1t8b+IsFssnwLSxL' },
  },
  {
    name: 'airdrop-claimant-280',
    address: 'agoric1wa4fmhthznpfk2ttjs30dq694u4amaqca69k48',
    pubkey: { key: 'AsYgXTzcXgRwnG3372F61/9t22Nj+p/+OqKRzL/UVNxm' },
  },
  {
    name: 'airdrop-claimant-281',
    address: 'agoric1cy324c5ckfq7dk208ftqlq9lmn4l852mlt3xf4',
    pubkey: { key: 'A1N91lqCMgKSJraGhRQwlAyyF8bX8siCWnwkJoEvnShw' },
  },
  {
    name: 'airdrop-claimant-282',
    address: 'agoric16nuxdl9nzjetfdjqhkxp34svrxrpfg2xmyz9dh',
    pubkey: { key: 'ArwdfJIK5AmCXFnj4CQsGZW4nE1AqsZyMBeasxzMIJUh' },
  },
  {
    name: 'airdrop-claimant-283',
    address: 'agoric1pa6djnmxqdgu23k7c60pmj6t75zpl397tjt0gn',
    pubkey: { key: 'ApihjqmdMWyq56hQAVSY6Uq9tOafomtYrtDkjxorV5tH' },
  },
  {
    name: 'airdrop-claimant-284',
    address: 'agoric1ug2knvca0v3uk9xcu5jlje5aqtrhnyqr9rpf3d',
    pubkey: { key: 'A4Q5xkJrVvZZVXXWZnJQgDohv4vBMSHPoD5UvTe7gIzA' },
  },
  {
    name: 'airdrop-claimant-285',
    address: 'agoric18xuurmctxlr5chttlq93ps7pcas3ag6t7hdpqx',
    pubkey: { key: 'Auko/5ULMlY7Jy8MiOnV+uZmY8mwLLsYmFP25L/oWh3R' },
  },
  {
    name: 'airdrop-claimant-286',
    address: 'agoric1r7yfsz6fwn50dsjz62sr8p8yyqpmr4ltk27r2h',
    pubkey: { key: 'AgRcL/PDuvYGMoiuDk7tp+VeLuiaxKkGI2sbGHU1KyGM' },
  },
  {
    name: 'airdrop-claimant-287',
    address: 'agoric1y5p5d0h73ze7c3266nv5gdte6nf2k80jq2wjp5',
    pubkey: { key: 'A6RJNlFH5rShxuHIefPyjCoumlakNgcYNtLHQbyqcKOg' },
  },
  {
    name: 'airdrop-claimant-288',
    address: 'agoric134h8tycuk4ls5hs9segmxgvfzhfesn99sz7p2l',
    pubkey: { key: 'Aqo0/G368c7UK6zj+zD5aCjpu4jJlty4fyWXJa6qhE+n' },
  },
  {
    name: 'airdrop-claimant-289',
    address: 'agoric1kv33xxtpryhwqjzgdf8d7ralcwhdcqfr4st3n8',
    pubkey: { key: 'A3lGM3O45SeoUOoXkHT9pMWCkfVcP0rtc2iZVATRR1Z5' },
  },
  {
    name: 'airdrop-claimant-290',
    address: 'agoric1s09w6kr4tu9vcunuf4d395qlwa8u5uf4vgepvs',
    pubkey: { key: 'A93AJC4+/1BFuoEg+qjP2WokpYZooKpkqWGQm5dl1STO' },
  },
  {
    name: 'airdrop-claimant-291',
    address: 'agoric1kjvmvv37zh64hjdlzlg3gnu0u62u2pqnk6aaek',
    pubkey: { key: 'A0wHqQ4YxF0YTPLvcR8hy5hwONszQ5dX7ypMUVkAdfXw' },
  },
  {
    name: 'airdrop-claimant-292',
    address: 'agoric148rj9rhtce59dky0xjydnu8cpneegy4xtvdh0y',
    pubkey: { key: 'AyUo2EsllPy69qNXvOg2YAsj5b1HlDL/J7KMIq6sNFLp' },
  },
  {
    name: 'airdrop-claimant-293',
    address: 'agoric1cz0yq3dfz0yz4h0k628d0n9349z3cvuedrlmw4',
    pubkey: { key: 'A/X4wVNfFginwXVOIwKCcZNKKJ+F1kV4cHjcM07FmcAT' },
  },
  {
    name: 'airdrop-claimant-294',
    address: 'agoric1tgyka6mglgdrpawz64znyvt9tgxktryjns0wsk',
    pubkey: { key: 'AxAPql98sDq/9kBn4HEdb6gGTR9iIbgOzGn9XsUVeG8Y' },
  },
  {
    name: 'airdrop-claimant-295',
    address: 'agoric14cpgk98yyhueh79h7mkar77vyd7qr7fqj5qhet',
    pubkey: { key: 'Av4eNp4mwyYgEPJFljZwjeymQ9u0sLSjstQQHa/rtTan' },
  },
  {
    name: 'airdrop-claimant-296',
    address: 'agoric1qlj92rkc6d4smcmhvp50hz9unz8k96ky826gmw',
    pubkey: { key: 'AlU7Qej9xcLttuG6XoqkP0MOC6bNpKBPwPYGp8NazSqU' },
  },
  {
    name: 'airdrop-claimant-297',
    address: 'agoric16458w4pfq9x7j6fm8akt0fzamv0sqdq942tmjj',
    pubkey: { key: 'Av1BA5iyZVGIvgRXqHH49BtfwEfwDAxEWdNas0SrGl4o' },
  },
  {
    name: 'airdrop-claimant-298',
    address: 'agoric1rw8k4dy5yg8hdsnupkx57pkuqffl47xcnfha2z',
    pubkey: { key: 'A+l1XrWLaNRptgxccZFqWdpmd9lGQsmXkRPBnT7xO8Sh' },
  },
  {
    name: 'airdrop-claimant-299',
    address: 'agoric1wnhpdqafmnlelxg64n4pxayl5qwkmtswrmd8t4',
    pubkey: { key: 'ApAfbZPcMVWN48CsEmTnkdcEVHYh6+nFDerF7mvAY15N' },
  },
  {
    name: 'airdrop-claimant-300',
    address: 'agoric15gyyhtn4mdh0s99gg6ng5yhjw99lrrxpac97y2',
    pubkey: { key: 'AlFzPBrvRlRSRKDVOdXCKKsKoacLZ+OEGuKWKV07ZyQy' },
  },
  {
    name: 'airdrop-claimant-301',
    address: 'agoric18pdkcp2j3utx0cl4x9mufdhpqxchaxehl5yp4f',
    pubkey: { key: 'AmsJpVfWTbvLvYylvr4yaZkXVI2KdABxY7mEefEv+MjA' },
  },
  {
    name: 'airdrop-claimant-302',
    address: 'agoric1tkxs9hlpqpglz7nnd4vrpzllp7g8p60tr4rh5j',
    pubkey: { key: 'A7z5bOLDpOjrLcRALkua0saO8b/uALuFp7yrjqoFjy1w' },
  },
  {
    name: 'airdrop-claimant-303',
    address: 'agoric130gx0vvh7htgv8qj9zx7f9x76897pj6hjsagch',
    pubkey: { key: 'AkyyQ2YiflDsB2xKz8ZNdAlUgsXPymSX5htxvBgslRmm' },
  },
  {
    name: 'airdrop-claimant-304',
    address: 'agoric1zvlaaaeacdkqr60ej40pkelgekr6rftzh3ctda',
    pubkey: { key: 'A9s3WtKTJ3Z7paUGwLtbSxN31ZaWMzzivBNkfjWmC6h3' },
  },
  {
    name: 'airdrop-claimant-305',
    address: 'agoric1pgca0hvdxmadyppdua035m54tgxkrgnre43lmf',
    pubkey: { key: 'A06x8WZMCLvCk83z8ECYsNGm0mNYjy5z/CFejyX8PeqC' },
  },
  {
    name: 'airdrop-claimant-306',
    address: 'agoric1ylva8judtx2yn08fw7p7hxhj3xqjrcckvwdqqw',
    pubkey: { key: 'AndARl6clKyz3Xv21eICkXWTJEjVnZ2O5bZMjDKRkeYm' },
  },
  {
    name: 'airdrop-claimant-307',
    address: 'agoric1sgzrasulfc2c4xyuc9ahz40tuq437wu59xtkhq',
    pubkey: { key: 'A4OsFallIpZv6HzMXiV5U9RIVlr/K5ju+HjiJIPWYfrQ' },
  },
  {
    name: 'airdrop-claimant-308',
    address: 'agoric1tht4amd0eg287dy63pm8j37sh8u7e2gfqz3g2n',
    pubkey: { key: 'A4+Dd2FP1XeFNPBwLaH56aJyA7i8ptE54Xb+AtUAKoj4' },
  },
  {
    name: 'airdrop-claimant-309',
    address: 'agoric1ya3y92ajjqhwvmaf6sfhmqmdlazqlm25kz4y9v',
    pubkey: { key: 'AsbKoO3HtQSOOlUP0oxpU1rPuQVIoaUzHXItlfP1PxPH' },
  },
  {
    name: 'airdrop-claimant-310',
    address: 'agoric1dzxv9ruahzgzg855mv4vur5g6mp20k2ps4hteg',
    pubkey: { key: 'A4gihQLo+gYx6OcdHBKk1/sRKkxjlIYKdc+fyT7OLQ54' },
  },
  {
    name: 'airdrop-claimant-311',
    address: 'agoric1e8au7vgjmg40mg8c88es3ndamu63sqf59lffrh',
    pubkey: { key: 'A7Cv8wOmwELFuCcRRLHy4Tu//R+pFe7L+vRC5HKtk9kC' },
  },
  {
    name: 'airdrop-claimant-312',
    address: 'agoric17ry6jzyakt4c0jc9r0qxkzsk4tafgxqtduv8ta',
    pubkey: { key: 'ArV1UxKc6RdTEkwIavjL0jilN1IIOFgsxBFDsOEhaaYX' },
  },
  {
    name: 'airdrop-claimant-313',
    address: 'agoric1jf4h0f3ndfk54ke56dfk9ffyz8xffxrh8maff0',
    pubkey: { key: 'A7DK2cRRITl+ybTo9qYdTNIrPqcktvChcS7ZGLbCjOyN' },
  },
  {
    name: 'airdrop-claimant-314',
    address: 'agoric1tlyxa5h0plkq2t235jmpsnajflsf5cwkmcsm2z',
    pubkey: { key: 'A7f1IPWZKJC0p282dp7yW9y8ODeH/RKLcMYMXOOVyWdN' },
  },
  {
    name: 'airdrop-claimant-315',
    address: 'agoric1fwtg9z6cttycm2t38agj3e92ddtjee5jlramav',
    pubkey: { key: 'AiKi4rl+GBQcFs6osAoW1ou/FrtIJH8Cm1cQ5+/EGVB+' },
  },
  {
    name: 'airdrop-claimant-316',
    address: 'agoric1ed39ajdyncu6q47njzf5fhud5cdqnsqz2tv9n8',
    pubkey: { key: 'A2tJA5HUju+Wp7DZfAfX37ygFi83c60MjrNca0rWPdGF' },
  },
  {
    name: 'airdrop-claimant-317',
    address: 'agoric12pud6dneqqnvqcu82x4klqh40j7c32ejphwhdw',
    pubkey: { key: 'Am9JtuUfIErfQMKwZ1c/ws3UqcsY7l8kB/xyxNm3FHrI' },
  },
  {
    name: 'airdrop-claimant-318',
    address: 'agoric1cp5jz8nw6azp523hw2au7xqwvty5397yqh28pm',
    pubkey: { key: 'AqFq0+bWWY0BrY2faisY/aRHQrm/hse9uvi8UQ1NIFuE' },
  },
  {
    name: 'airdrop-claimant-319',
    address: 'agoric17dlgk6mewk9rfcdnw9halacvgahshsze39czv4',
    pubkey: { key: 'Ag30X54sUPggTqtofBp5eoW1py+lM/S6gGWfjbqppJLJ' },
  },
  {
    name: 'airdrop-claimant-320',
    address: 'agoric172emkyamjlvvxwy2v6cppsv56yppsf6haxjjep',
    pubkey: { key: 'A0eC469QapkxbFkBh8fQf/JEPH+BkIM9vqwp99TFv08f' },
  },
  {
    name: 'airdrop-claimant-321',
    address: 'agoric19gvtlfflmkgraumhua0708new2ad7neemyntj5',
    pubkey: { key: 'A1ucqgmyAc+bAk4ip+JJeGPFIVnwnTXfYfxulPOWLlez' },
  },
  {
    name: 'airdrop-claimant-322',
    address: 'agoric1qksw62fc5ldxsn78yumw23r7vpcuxqpujtg4dh',
    pubkey: { key: 'AjQHfzLJ4sedKk+PteosER1lFEUHDThZHjJcwcUqxDSC' },
  },
  {
    name: 'airdrop-claimant-323',
    address: 'agoric1skur9z73x3du433zczhhq6qae8qggzxm4zvml5',
    pubkey: { key: 'Atw4hKVgvwKdRbNvdsWROYxOKA+JSqrblSzo343reuab' },
  },
  {
    name: 'airdrop-claimant-324',
    address: 'agoric1fkgcj83zee6t2xqwf3kkjcrunje94q2r5yvyfz',
    pubkey: { key: 'A9vCXiS5Nkz/pSvgMD1HIihlfa170/0OjDRPRvV+jK3o' },
  },
  {
    name: 'airdrop-claimant-325',
    address: 'agoric1exvzqkneu9rrrm2503lx7vpzq88ejnvsj585u2',
    pubkey: { key: 'A+hEjH1TqP2cHnMfpSjiSHdHLL7+9f7l9lCGzV0v78Sm' },
  },
  {
    name: 'airdrop-claimant-326',
    address: 'agoric1zu73fn0r0fqtey9vmdvht5pefw8khclqqsn0au',
    pubkey: { key: 'Aq50qFJC66g8j0UgY+h8HXLePXp/yXKCLlH0th6fKuWh' },
  },
  {
    name: 'airdrop-claimant-327',
    address: 'agoric1j0hg9cs4jzmupzstem0adaz3ld4pra596ze0zy',
    pubkey: { key: 'An3OSNIvtMPdpMYNVjWu3RUhbvhN1l3T48XhbUf1HY4O' },
  },
  {
    name: 'airdrop-claimant-328',
    address: 'agoric1reauj7cw78754jlpwdzxm3xpyddq8fua57xqgh',
    pubkey: { key: 'A5GEtJ6O1kYl0c+Ba3x1yKG9WM0jjhVDwBjCrPTVR2C5' },
  },
  {
    name: 'airdrop-claimant-329',
    address: 'agoric1n47tsckzya5rg342h5l50r5w6ztcd447yt5qde',
    pubkey: { key: 'A/Ev+l8qSmIpNE/ThGsMOt8/PJPA+n69NnOfbQ4XRCzM' },
  },
  {
    name: 'airdrop-claimant-330',
    address: 'agoric1880p3lks8nqkqm6evm4l34y4tz0qk99uyu84dx',
    pubkey: { key: 'Ah18c0vjArlxu7zgLzfAn6/Ur1cGQ996RddIODXYd/DL' },
  },
  {
    name: 'airdrop-claimant-331',
    address: 'agoric13cdd2vek08dt3jcn6rppk684rtxdqfcqmp62l4',
    pubkey: { key: 'AleZv8g3eRObrMD7htwFdgbnlAYae7Jx+z5pEnHZ5uae' },
  },
  {
    name: 'airdrop-claimant-332',
    address: 'agoric14mkeappnp3yedtrt7mnhj0s7ua8hlpgejp76xc',
    pubkey: { key: 'A6AoS+butquD2nwNzKPGWwrn2hUO4Z5Q4+up2CrwkhKS' },
  },
  {
    name: 'airdrop-claimant-333',
    address: 'agoric1z3xlk69gauza7j3ca9jn2nv0addyct09kf9chq',
    pubkey: { key: 'Ajd7/HiZInr4oMENxyGmUSKovK1KGACCpE2478KzTZUS' },
  },
  {
    name: 'airdrop-claimant-334',
    address: 'agoric1h7jg084rr02s45k362ad92evllm7n092jkqhm8',
    pubkey: { key: 'Aob8c6ZtuTRAEZkA2s41hbExok4iw4jlTDAJsHk4QJDq' },
  },
  {
    name: 'airdrop-claimant-335',
    address: 'agoric1fesum0qn25cuwnp8954a0p50y7cjjutzn92tfz',
    pubkey: { key: 'A9OM/d4XipwqI6tUcPih71/BfXZWL6qQyGMu277/EX8x' },
  },
  {
    name: 'airdrop-claimant-336',
    address: 'agoric1wdx2k33fge7zqxmfynyklruzypmzdsjv8w83ps',
    pubkey: { key: 'Ahn9+Cy+//o7/UN9h/zpyDN/c72f38Z1KzsuyFIodeK8' },
  },
  {
    name: 'airdrop-claimant-337',
    address: 'agoric1yd08ww5lu7azyhazhu9sdhv2d84tga0257m4fy',
    pubkey: { key: 'AlwjM0h5SfL5NgNoN9sf7780OouRr2BrJySSObS7BonZ' },
  },
  {
    name: 'airdrop-claimant-338',
    address: 'agoric17nk6t8jvup0gz4r6s4wae3x8hq0m9vwmhzh262',
    pubkey: { key: 'Ar+3/yu/yusQtMsQ1yLuBT2TAkqN6DFWzoW1MkHwaPUu' },
  },
  {
    name: 'airdrop-claimant-339',
    address: 'agoric1fxg7ek274etr6fgv33dr5v225wchv26flvuhe7',
    pubkey: { key: 'A2XEVTZJO1UBFQpXMAoSXgysU+EhW3AEzk7xR3RSrIzo' },
  },
  {
    name: 'airdrop-claimant-340',
    address: 'agoric13nd5vlh6rscq6wll82wel8szpfmhzhelyeew9e',
    pubkey: { key: 'A2yGQwwcHlkvwcyKcSb4ZxNB0YihuL7x8OmPvmiBkFDi' },
  },
  {
    name: 'airdrop-claimant-341',
    address: 'agoric1672wcr4pmekpf39uuxg49kas599grnu4f2s3yg',
    pubkey: { key: 'A6AGfy6LtmdS0y30CSgJdQ5wSVUYZS+bC4lh8F3b4pLJ' },
  },
  {
    name: 'airdrop-claimant-342',
    address: 'agoric109f9xweqkhegc6fvd6p0j434qayd3wm7tmgm84',
    pubkey: { key: 'AkGcTc28qCXOjXECR5bRsIctVClZ7VvBQ5sHlXXFPVoT' },
  },
  {
    name: 'airdrop-claimant-343',
    address: 'agoric1ut4czhvvvh6ey5u28yprhh744m5juagwhyvzft',
    pubkey: { key: 'AqtQTRQpZuHhF5ZIpgoPLJHWQH8vSTCyjPinFLeMPStN' },
  },
  {
    name: 'airdrop-claimant-344',
    address: 'agoric1jd8m0pj68apx7datnmnnaajdhkmarnp3hyp9g7',
    pubkey: { key: 'AyzDK/yXR9tQtv6NN3jt20Im1+llfDaJedXtAnoQbDCn' },
  },
  {
    name: 'airdrop-claimant-345',
    address: 'agoric1st9lsusrqc032392yde64e7g0amltx87clther',
    pubkey: { key: 'An4i8xfsAYremkGhgPYpnYGBfIg/lWtwnWFpbDq709D3' },
  },
  {
    name: 'airdrop-claimant-346',
    address: 'agoric1vh5dtte353g45ema072nna74jayqdyfc0pmtvs',
    pubkey: { key: 'AuIMHgNIEVmFS6FZRKWA34KI0JVWABHqLL5kT10HuNd0' },
  },
  {
    name: 'airdrop-claimant-347',
    address: 'agoric1ae2wpullt2ege9cr6aax8jw3amcrmkwsr0fjg3',
    pubkey: { key: 'A+e32Hbm0G8JG3vFhGoSYvmoSFG6xR1nmojq4dq6k8ba' },
  },
  {
    name: 'airdrop-claimant-348',
    address: 'agoric1m89kysk3ly9tyreju2267z9ua0s07cteakk7fs',
    pubkey: { key: 'Au+KcWeGuREw5dbyH9oaZVrmBWe99qGfVglKaFBAMQsw' },
  },
  {
    name: 'airdrop-claimant-349',
    address: 'agoric1vkyqx63jxcxkmyfznrarzqjv8e3qgrssa0mtjp',
    pubkey: { key: 'Ayea07DV/P0xh3weNdwSrwvUvbSSrWUcEY+HKVUllsGz' },
  },
  {
    name: 'airdrop-claimant-350',
    address: 'agoric1wjdxn647uxkrjnf8jhpwjc294jvnx0udzj6pqw',
    pubkey: { key: 'Au+pJVzARQUXALUXf0SZNZT2Zas8mBNisphWWc5X41Y0' },
  },
  {
    name: 'airdrop-claimant-351',
    address: 'agoric1m0p3pvkfx2pn4u8dl30qtxvpkqx9mr27usx3je',
    pubkey: { key: 'Auei2k4j/cpeZyequ16hTcUxqkRMVGOMREmUQA3rwV2b' },
  },
  {
    name: 'airdrop-claimant-352',
    address: 'agoric15agl5s4hmg4stdxljme73ejfnmzdt8e7sn3mvf',
    pubkey: { key: 'AsvuKmSQqifY92DbooIpXcLB82H3TT9xBr/qzBDpW2Yt' },
  },
  {
    name: 'airdrop-claimant-353',
    address: 'agoric1k84lkk260snhqc744v80jqy9t69dlssakpvh9y',
    pubkey: { key: 'A9VtkVata5Bpzx8/70X+8dqnDw2UcdqAZtRkielvJiFV' },
  },
  {
    name: 'airdrop-claimant-354',
    address: 'agoric14l2pgy3sfakxrmaexzch22ax855len4nazhd0h',
    pubkey: { key: 'A5/L8uIXuvegdBGNNQu5VYYuKpTPayzuVsgFnl91nKwH' },
  },
  {
    name: 'airdrop-claimant-355',
    address: 'agoric1ttvzlum03v8m4rnxrz85r9hau7ktd8mzarpj2z',
    pubkey: { key: 'Ah5mitYM+Z9sBugN63HC4rc1S6Ifn2uPNu17hS4xaedH' },
  },
  {
    name: 'airdrop-claimant-356',
    address: 'agoric1h0vgw54azjpjq99c6nh4x4tmy7q4reyswj6qp7',
    pubkey: { key: 'A8fw2BmqS94pWuhYpqXHhPZIG13dMBEhQ8hpAMRU+jNc' },
  },
  {
    name: 'airdrop-claimant-357',
    address: 'agoric1pjw90r2fn4h6p3pnvgxmzzcfn472fq93e2ym7g',
    pubkey: { key: 'AoTw2Xi1OJzUjQYydn87u4MPDLserJHaZyRlozqy6TDk' },
  },
  {
    name: 'airdrop-claimant-358',
    address: 'agoric14wgw5nn97z5f597d9y3e5n82pm7xdcks2q594e',
    pubkey: { key: 'A5IE2kJEoD2ELLWRKQY9X/adhCFSg2rHQOfCOT2uukM2' },
  },
  {
    name: 'airdrop-claimant-359',
    address: 'agoric1snt9jvj2u9w5qmm8n87e7ljwtjg22dr2epdu9e',
    pubkey: { key: 'A+O/RX348EKidNaacOXkiu9d+DzuIolKDQ1mLzOx4tyx' },
  },
  {
    name: 'airdrop-claimant-360',
    address: 'agoric1rf3agnvsv6f3lezrz555u94q8pvfm588zawrr2',
    pubkey: { key: 'AqeSlThv6FS9I7wG0XbqBU+Vm0/VLdBqjDPpheHJZK3v' },
  },
  {
    name: 'airdrop-claimant-361',
    address: 'agoric1vvj5uqz0jncjluyeqz95sckfz69ant07enezdq',
    pubkey: { key: 'A/7PT2ZQ/B2+Ld+2PyaWhlBUiIgnKTFnxXqraXTecuWK' },
  },
  {
    name: 'airdrop-claimant-362',
    address: 'agoric1v8ach5pd4ak2s7r0pptznxfrz2dnqjh626d9c3',
    pubkey: { key: 'Ah4xoIlfTglmSB1yKmLDaBWM4rxPz5AngjSfP4RiZHeQ' },
  },
  {
    name: 'airdrop-claimant-363',
    address: 'agoric1m2vqt8xk2tqxkukespunf034cxkxfa9haatfzp',
    pubkey: { key: 'AlQSU6S833Ec/8cWWUo46Jg0w4H8IxKUOYpmIogOWnJd' },
  },
  {
    name: 'airdrop-claimant-364',
    address: 'agoric1sjmectskk7sgdq2cgte92f8aeyvgrpfp6yqvxc',
    pubkey: { key: 'A7hAOurHACTKN03RWDZ8OCbIBjoy1jrZQqThXZp4t/UA' },
  },
  {
    name: 'airdrop-claimant-365',
    address: 'agoric1tjwahv9fh8yfr8dmm0pte4azmysetzn9ty6920',
    pubkey: { key: 'A/CS6tEFveKeMlQYZe5iZWUoGTMrzrx/QnzVHCCHE675' },
  },
  {
    name: 'airdrop-claimant-366',
    address: 'agoric1uxxvrmchgl0rccv89t38nm50x2g399kl3zsp4s',
    pubkey: { key: 'Au8VfOKdva9hfXOe2gkitEHrIoCBP/6gnZ+Keg9lN2vV' },
  },
  {
    name: 'airdrop-claimant-367',
    address: 'agoric1ntn03zg6nmrd3y6vxpunqe8m8v7qzk3trgcw59',
    pubkey: { key: 'A++b1I6Evk5IxmKDyU7Fl1cs7pDBmAg4/sJRBOzRuSA9' },
  },
  {
    name: 'airdrop-claimant-368',
    address: 'agoric1sq7rrfdeqxxqk5gqrsh3dq9p33c43jz9jfj9gy',
    pubkey: { key: 'ArxNpCafU7tG7KkTObLmSbYvLqWgBxG7m/eElxR9uePH' },
  },
  {
    name: 'airdrop-claimant-369',
    address: 'agoric1w3ma8ftcv67h70f4q2xje4veefwqthea3sr2p2',
    pubkey: { key: 'AsvzG0th+GNuPpMe6X2vsW7+JXLYllwedV3cM6I2BGU2' },
  },
  {
    name: 'airdrop-claimant-370',
    address: 'agoric1zf78r2mp5uersm9s0dquayvhzs2k54ehrk6nl4',
    pubkey: { key: 'A68JEGm9wsGytc37BN8vbNsSYOBh5dNUIbCXIK3FeiQ3' },
  },
  {
    name: 'airdrop-claimant-371',
    address: 'agoric16qn4fyjrjppc50n3hqnqaspzsmmnm0hsnefqwq',
    pubkey: { key: 'AvUvEEFZZmQpftxx0hDxfncJ4CY3XkpIGN8HrnTi6pb7' },
  },
  {
    name: 'airdrop-claimant-372',
    address: 'agoric1u9ufd79e7s2ya7hv0cn089zj9wydqcuhssxeda',
    pubkey: { key: 'Am89ttb5vgyXsCaFgtKL9lts6+NOMqT02APGC8ax/wd3' },
  },
  {
    name: 'airdrop-claimant-373',
    address: 'agoric1mlsk9chvky8lycszmyfzw88g4vz98mrglxmvv0',
    pubkey: { key: 'AhWLan5gbZp7JLlm5GFA0l/PCYuR6jkAydh4VkY1TMES' },
  },
  {
    name: 'airdrop-claimant-374',
    address: 'agoric1s26y73ehde8lsfh4k77h3yjjl8znpd2jh7tpfa',
    pubkey: { key: 'Ax/tRfvLlNtsDaLOdzdI1j3bSlS1wQ2Iu8qQTn1NW6P1' },
  },
  {
    name: 'airdrop-claimant-375',
    address: 'agoric12u23ke6yjg99gnqc3tfxqz7esfpfukzgnyvgzr',
    pubkey: { key: 'AvJbV3m5lIy4iExDxqPjiZyyQeBZV2jjEjIbb7kK5kRl' },
  },
  {
    name: 'airdrop-claimant-376',
    address: 'agoric1adfjjlsz4hfdetfleufxd8xkpc9xr46qrk3k8g',
    pubkey: { key: 'A4V1fg6f6M/LhccpW9gprxo+999kyhEyUbhbuYOYxR5V' },
  },
  {
    name: 'airdrop-claimant-377',
    address: 'agoric107t0k6lhjgtd44sszcrdazsgs27qa2qd85vf94',
    pubkey: { key: 'Au6PshO0Y03468NFGMK6+fBvbJA23JQpf4ggeZzePC4h' },
  },
  {
    name: 'airdrop-claimant-378',
    address: 'agoric1x5u7uzaeq6xgmgfa263xv8ljv8vrle4y5wsp6v',
    pubkey: { key: 'ApPGiSPywiQIrziviVBMWun6EYLg5ydYJHbTl7JskH5M' },
  },
  {
    name: 'airdrop-claimant-379',
    address: 'agoric1rssumyxlgrhsa7lpsclfue5rzzyrqhg4halw5g',
    pubkey: { key: 'Angzd3Z4+n3IzrTV1EeJm/MKpSs2x6mtUedUJoIT42en' },
  },
  {
    name: 'airdrop-claimant-380',
    address: 'agoric1njp8kaem0urhf7uv7wgmfd46ypdnjayae8nkqa',
    pubkey: { key: 'A6oPUgdyuPrtAXXiU3XoZbC1tfMBMM96IctEESyv3VCA' },
  },
  {
    name: 'airdrop-claimant-381',
    address: 'agoric1dxush9dgjh63hns0rmjtxs9kfrk0zt2xhqucz8',
    pubkey: { key: 'AroAFkiIyU9fLzltdkhMCm364k2OVhpOFMuqyS7EZzvu' },
  },
  {
    name: 'airdrop-claimant-382',
    address: 'agoric1za8e9jjvlwsjxdswuyc406r7uj5w9f0teeye6w',
    pubkey: { key: 'A3rsdS1owx+w4RuZohl5UKW0HJXxhrkEDp2qKBddElwr' },
  },
  {
    name: 'airdrop-claimant-383',
    address: 'agoric13n4warxfjcxj0mc4rqakxwpftj2rzj2nukwn9u',
    pubkey: { key: 'AzBMixOCVFWLiiUHOMJG0VZPHab5vMSUcDbPRi2XOh7V' },
  },
  {
    name: 'airdrop-claimant-384',
    address: 'agoric17d6gsx94a08mvcwc2rgq6quh7y8k2qc05yfmq4',
    pubkey: { key: 'A91xXK0AlNEJDlnoZijvM5tvWNlmXHLXsaVK8g8kPnaB' },
  },
  {
    name: 'airdrop-claimant-385',
    address: 'agoric1929l8ez9eu8qr7ck0ycd7sq6jv79z9rgk5r4js',
    pubkey: { key: 'AotbYDc9xQJ+5m9OngbET4ORzDEVxkwNLkceqrPuaUyP' },
  },
  {
    name: 'airdrop-claimant-386',
    address: 'agoric1xclq5pljj67gxk0486k08p9rd397fa9zsvw0a3',
    pubkey: { key: 'A/DZqxlstyBuA7dodW+1g6UKescP2yyCUUSIoxbh9qFN' },
  },
  {
    name: 'airdrop-claimant-387',
    address: 'agoric106rdpus99mez40mylc6hpnx3ugqkrj8cu3fxxf',
    pubkey: { key: 'A8xExhP0GXJqTWyaoXjd6Vl+eqpVsFHRbwjb1q0NH1/l' },
  },
  {
    name: 'airdrop-claimant-388',
    address: 'agoric1szcsvr09ulzhu8scl4n3e3qx707sezf7s4n87d',
    pubkey: { key: 'As9dYFTQSLzx/d3THe8XLSCyDEMcxByStdA3CP+fDp/x' },
  },
  {
    name: 'airdrop-claimant-389',
    address: 'agoric1za0rykvwa39xha3gwlncmeqnpp5c3qr07992ym',
    pubkey: { key: 'Axdn2f/2bB2j1lxO9rxAKIB+/qWJNiVYSKW7FY8h8Im2' },
  },
  {
    name: 'airdrop-claimant-390',
    address: 'agoric1uzwy2hla5d6mxv8j7mlue66hp598d5qzrz6rd9',
    pubkey: { key: 'A3KsSYOvMG8hmNEYircAUBll/tGz0kci7rqbsi4MzxEY' },
  },
  {
    name: 'airdrop-claimant-391',
    address: 'agoric14c0ke8n6jw3jjgrjy7js8ard9gentgrdrcw269',
    pubkey: { key: 'AlqIkix9oHZB6W2ufzLwqLTyzT8X3jwE2R7NiGQghFR8' },
  },
  {
    name: 'airdrop-claimant-392',
    address: 'agoric1jgda8zxnhtwk5rfvaaxnqvldrjtnu5hhl4aerm',
    pubkey: { key: 'A2kucf9i8Wxlh8yJN5qX4oycUF4rqi6OSKFnHMiUrxbi' },
  },
  {
    name: 'airdrop-claimant-393',
    address: 'agoric1jpjkjvwlfa7meg4cycm2ygwg3rsgswwtz34nxy',
    pubkey: { key: 'AyO8EKxbPMJ3irPwqLqjeYFRPCbQTyNaHDeEOpPF2Ysf' },
  },
  {
    name: 'airdrop-claimant-394',
    address: 'agoric1y3y9a850q9d9emec9ha8zwxud7nrg8uv3f8fe2',
    pubkey: { key: 'A+mlrMvaMkeqKQQEmBSQdYyEnlTBk8Pmu2osLK/SIc3k' },
  },
  {
    name: 'airdrop-claimant-395',
    address: 'agoric1fg9309eeks48syv0nlmf5z42wn6ur583swr8qf',
    pubkey: { key: 'Atbhs2HP3Sa8ImVnJKaCTgvM/T//U8Rs9QX+FZnETz8Y' },
  },
  {
    name: 'airdrop-claimant-396',
    address: 'agoric15mzrce8mpfw0sq7gyeskyz7ghqx2p9reckwuug',
    pubkey: { key: 'At0g8syITQX9Jl5Nb8Y5bsQb2wE14wOlt3mt+eK6DjWO' },
  },
  {
    name: 'airdrop-claimant-397',
    address: 'agoric12x5kqv60456lugc302f7ssd0n85qe82px4dw2r',
    pubkey: { key: 'AzdyelwQSM2/tbaIw70RDnNrqsXxoU4cNGTuT2bpciZw' },
  },
  {
    name: 'airdrop-claimant-398',
    address: 'agoric14p5revqjcrnwsyp0qg8zucz45w9dlph78rl62r',
    pubkey: { key: 'Ag3GWMV46VAjAYuRGb7ZjZxV6p3Loo7jDJWpo9vvPbdr' },
  },
  {
    name: 'airdrop-claimant-399',
    address: 'agoric1yus3pja0pfe6stj6x3x5k55vmh50jjw6qcamcr',
    pubkey: { key: 'Au7elFJ2H0pgfnS/VrjJkwovh5VkmitKTn/SjMt2C1mY' },
  },
  {
    name: 'airdrop-claimant-400',
    address: 'agoric1874m00s6rjasu36f8pmta9fk77cxntmuqsdge8',
    pubkey: { key: 'A8h80DQGC7TWK7JunwJpxdaId+mezr9GNKitdDJ1EONI' },
  },
  {
    name: 'airdrop-claimant-401',
    address: 'agoric1m0pyww0xldfrln2wd30rnlpzul7jlw6ywps3l7',
    pubkey: { key: 'AtT6An6y0r1G5fFKK2yQtx+rmZH0d0Vsa6iSAr7yFy2z' },
  },
  {
    name: 'airdrop-claimant-402',
    address: 'agoric1pna53uuwp9pah8pr3jucryslj3q9xcjqm9964w',
    pubkey: { key: 'At9RTeqm4tGSfq5TIf9hCrzUtn07aPyS3im4oymaLSsu' },
  },
  {
    name: 'airdrop-claimant-403',
    address: 'agoric1hgr92cmvng9kdxt7gp8mexa3y6jtr0dgz08td8',
    pubkey: { key: 'AuAvUEvSDsVJx0s97x3kJUiYUizzvaA9ugrsyClAlMTw' },
  },
  {
    name: 'airdrop-claimant-404',
    address: 'agoric1djt3kuvd2zrmpv29qx6fc793gq4u76peg8gpz7',
    pubkey: { key: 'Av+SRigohD7aQz+u2cqt+PxrXkORc6SMfnIBUDbtPi4e' },
  },
  {
    name: 'airdrop-claimant-405',
    address: 'agoric12gqcv5mp5056wly9tp540apxrrv782u6hm52an',
    pubkey: { key: 'Auusd0jTHfMwkstLr2EV6jtFi2acJHkkx02pJhEBwuvp' },
  },
  {
    name: 'airdrop-claimant-406',
    address: 'agoric1dhqy8vmhujs6hpu2dayksetvlhc08m3y6en9lm',
    pubkey: { key: 'AlW+fMMCEg683J/vkAqEE/DBDfPfAAnZS7c8o8SNYry8' },
  },
  {
    name: 'airdrop-claimant-407',
    address: 'agoric15dpw4nenehugsumgfre8p9jrd76msevmfl2azk',
    pubkey: { key: 'AnIeVDy95AwXfia8hBVnS+UYoPzJrNyhxx1HnZdfrF6B' },
  },
  {
    name: 'airdrop-claimant-408',
    address: 'agoric1wdsgrmmuphn7tm6amzrt0nt833c4xwg2cfxw66',
    pubkey: { key: 'A3VdAipB2SRoX2UCFzzKaFNIcbj6uXxhDVZ+1c5P+IIV' },
  },
  {
    name: 'airdrop-claimant-409',
    address: 'agoric1uqgh745dpl9ktfrzfv8re3qxa8ngxcyxw8ch2t',
    pubkey: { key: 'A5nlJkcP1VBOkt513tu0YYmAqpxUuMv+1C9YxEZsa1P6' },
  },
  {
    name: 'airdrop-claimant-410',
    address: 'agoric1kr4j4vpz0jj05pnw6hsqd69y3dnd46cuml6um7',
    pubkey: { key: 'Ak2eyfs6Hy978vsWJ6XwrvEIdpFwDvXgl+OnlkQZvocd' },
  },
  {
    name: 'airdrop-claimant-411',
    address: 'agoric1znjhw4rhlxxly8g6g5dp006ygf9tgejpw7dvzm',
    pubkey: { key: 'A2FHtuFHfglVCzBGLgJhZW94WqBxd0ctqACDpOWjTf+/' },
  },
  {
    name: 'airdrop-claimant-412',
    address: 'agoric1fwrzuksuxp4vqta020td2ltdaprxesykp6t9tf',
    pubkey: { key: 'A8at6W8jumXtJs2nDwYww1ZfTCPxYiOjSuwe08s6/YIY' },
  },
  {
    name: 'airdrop-claimant-413',
    address: 'agoric198ewgq3ny3j8gze53l904nd9x7e9rm5ndkagx2',
    pubkey: { key: 'A8mzsH/RFu8NVQnelEx2N2heJVoEF4sRRu4MRpFOdq80' },
  },
  {
    name: 'airdrop-claimant-414',
    address: 'agoric176g3yn0h0t6qfgx0tmc9tnhnct92ll77n4g0dq',
    pubkey: { key: 'AuNvYfriztQHSiLYcwENQvxWQB2TIH+rjBCUagmVKJUW' },
  },
  {
    name: 'airdrop-claimant-415',
    address: 'agoric1zxy95wyz698chf9z6x2uedakvz0u45th2sfm8m',
    pubkey: { key: 'A301M0fFPW4RTVaw9O/ogor810YvnYtb3a9I7ALlysC0' },
  },
  {
    name: 'airdrop-claimant-416',
    address: 'agoric19as2g9yhfxedw49m5zrt50z0acxelahs5v049y',
    pubkey: { key: 'Aw2WsgvMB6yi+QUhnY/bvAWTBtWhkINDMNWMelGnqFLj' },
  },
  {
    name: 'airdrop-claimant-417',
    address: 'agoric1qv0ex6vfdhkc7954tqe606s8uxxkv52427wj7p',
    pubkey: { key: 'A/d0Tuv6kM5E9+orIh1YmO7Ci0rcxjxDjCAMiHIOLNT4' },
  },
  {
    name: 'airdrop-claimant-418',
    address: 'agoric17cg084rnm7m64lqkpuk6dd0fctv5xjpj55n8zu',
    pubkey: { key: 'AvOp7XRvQ+k4afgTTORFG7fiFEdYeleqf9ZBCciVFppc' },
  },
  {
    name: 'airdrop-claimant-419',
    address: 'agoric1t5aqsy6fxhy4s2c6e3huxvp2krmuacgww0902g',
    pubkey: { key: 'AwmWtqSRIc7TUDXrF/ZtFoNRsVIKZ+azN9ns66V9clti' },
  },
  {
    name: 'airdrop-claimant-420',
    address: 'agoric129lupyjmyuswaav2qnrfq92j9pj5lnpxf5qv3z',
    pubkey: { key: 'A8sdtoHmfYRUPc9rGxgle0OLD6zmgGJtWZN/lQGXwrvz' },
  },
  {
    name: 'airdrop-claimant-421',
    address: 'agoric1fhr3l454e5aqa7f5wktj8r270n9ydezdmegzzm',
    pubkey: { key: 'Av26nghL97+YLGPjUB2c0rzAt0QV1H2Lb0ShpftxOoGs' },
  },
  {
    name: 'airdrop-claimant-422',
    address: 'agoric1sp66euhk497ewh85melmwvyglqkpzamer9shh0',
    pubkey: { key: 'ArtqBfXAPPtVR7vvbdQ4kSu2LCU6y7GX8kkBaXUXcA7D' },
  },
  {
    name: 'airdrop-claimant-423',
    address: 'agoric1v8l8u87kezkre58eyky7z0sv3lsc0nzhgtv3xl',
    pubkey: { key: 'AtKgNquDb57jkFkzQ9W0CSuSZSjnvxaRAANHP1RqAs/X' },
  },
  {
    name: 'airdrop-claimant-424',
    address: 'agoric1nuf56e97g966e2ku9att8x94rjm0k7tm9wnkl7',
    pubkey: { key: 'Ag2Vs2py5kSLQ4rtbBu53b+rwgtFDccTUJoo3b8fqfIx' },
  },
  {
    name: 'airdrop-claimant-425',
    address: 'agoric1t6qke3ks6u25e463ystuegmt60e7zl8vdjssrg',
    pubkey: { key: 'A8ibTZw5jzsMV/K8u78VJrClpVZKtfA94vzV1vqDDdb3' },
  },
  {
    name: 'airdrop-claimant-426',
    address: 'agoric159zqmaq954gztwha654ssggv0f2k6lxjgen0cf',
    pubkey: { key: 'A9RQnb/5t91YCuAcEFc+dB5pxVag/iSDr2gG4en+apm4' },
  },
  {
    name: 'airdrop-claimant-427',
    address: 'agoric1mqxfxu7g67wm5qx3zn3talu3564z0fpw45h4tm',
    pubkey: { key: 'AtX6WqJO+NGM8UH7rSIKxeODzK+VOMOJpnndOkUwVYsm' },
  },
  {
    name: 'airdrop-claimant-428',
    address: 'agoric1pfru8s78y8aerlytylnmug609ny9asqutzthtc',
    pubkey: { key: 'AhcL+mv63R2NypU+3YeOiG3UVT2ncMsFzO/e3+PGkkak' },
  },
  {
    name: 'airdrop-claimant-429',
    address: 'agoric16su3nn29hldw48azr0u262ecyjj6jsl58mavme',
    pubkey: { key: 'AhWOqxfIBoPECjriH/oLGOllu3zo92tG8l+PysQFInpw' },
  },
  {
    name: 'airdrop-claimant-430',
    address: 'agoric1vy3drp78cgccuakm02re8hnu2h9nyst2d047we',
    pubkey: { key: 'ApRDKLoMizHJTvACwTg5nmu7aIw+V0sxhKxWXRoej95X' },
  },
  {
    name: 'airdrop-claimant-431',
    address: 'agoric1l5s7ccvuu8j5p3e9mpqsd6asgn3rkfaskf4tpx',
    pubkey: { key: 'AlVUoyK7WyIuxFsDig4X1R/GPSng8ULVAdgcedG/9Dmv' },
  },
  {
    name: 'airdrop-claimant-432',
    address: 'agoric1dqkynrvukqw860e3kdlq9lp9qryqhsm5kft45a',
    pubkey: { key: 'AqkxPdGkBV89u34UvYl7Y1K8MAOfRC2g3oFf3hix7nDb' },
  },
  {
    name: 'airdrop-claimant-433',
    address: 'agoric1satr3uw9n2ftdavn4num0dj04ensg8dcqqkdmz',
    pubkey: { key: 'ApOLYGrn0SGxgF6u366p4csH9BsnagaC6GO1rqfDL4gr' },
  },
  {
    name: 'airdrop-claimant-434',
    address: 'agoric1znvaxz0klv6hanh7j5pxeegwm3scrz9u6lkvwj',
    pubkey: { key: 'Alc/cs2UnIgJH2fDCQCFk5hQvvvbmYahypTecITo5LfD' },
  },
  {
    name: 'airdrop-claimant-435',
    address: 'agoric13w6sqme2wt8j3cm77pcstphvh97dsg73vyen7d',
    pubkey: { key: 'AimUBXYS3ftGQcmMrQngqdkNJV69J303K00QvTvkU7BH' },
  },
  {
    name: 'airdrop-claimant-436',
    address: 'agoric1avyxpw7wde6f0a9f7rstk5aj3ruj3lqaen2q40',
    pubkey: { key: 'AzskUT7OMYKryO5MPVz0xFeQW1zMpdCH8TVrpuJP2kvY' },
  },
  {
    name: 'airdrop-claimant-437',
    address: 'agoric1kngawzctc5mfe5e4f50ua570skynkn3rkhwyz3',
    pubkey: { key: 'Ay6MEFjBgpte6PUikfKvRfJzu6wd8YlG6RW0bNqerPdm' },
  },
  {
    name: 'airdrop-claimant-438',
    address: 'agoric1hulwx439qxq2m93vn06y99zv65wg7phrcqn96f',
    pubkey: { key: 'Aw8Lru1b6KsZh55JzMQEytfXnK+XxN9JTdQQvn1lJSxB' },
  },
  {
    name: 'airdrop-claimant-439',
    address: 'agoric1kzpvpu0g33dpk4frvd996m32uh4k2vzecgmsq7',
    pubkey: { key: 'AmFtHPEHH/O+gW2KnaaNlfTThKjegbCjeoEY2KjyyXYn' },
  },
  {
    name: 'airdrop-claimant-440',
    address: 'agoric1wetf5xh20rd8936fv67hg4wtqyk7eg2jzfft3j',
    pubkey: { key: 'A8velM+sWXVa+qB9xkld4zO5fXm3j0/0CLNU+g8wN1VS' },
  },
  {
    name: 'airdrop-claimant-441',
    address: 'agoric1gsp3q65edeefpd9rv949nk75xy7pr6dk8zk5uq',
    pubkey: { key: 'AyHo+XIEPFKvyHgVzef3lZWZMES3YowbkC6hEvpfEpaf' },
  },
  {
    name: 'airdrop-claimant-442',
    address: 'agoric1ee9r7use0dwyqdnztvqxv6cw3ehkhu3esdyjup',
    pubkey: { key: 'AnIzaRTld69txBwXqxN3cZ4n2bcU6q3AEZDzKR0LrCA9' },
  },
  {
    name: 'airdrop-claimant-443',
    address: 'agoric10xf4xv26uarhaycp8nmku8c0ta7pgjlxfhfqjd',
    pubkey: { key: 'AuzLSUWnt6ajaOAJj1GPW9IGkPvDq6YlE5xhHdR1PxHv' },
  },
  {
    name: 'airdrop-claimant-444',
    address: 'agoric1gq5yyqsycju93fcjacc9w424mgt3hk465x9f62',
    pubkey: { key: 'Apj8pv1QVh2IbJyjnuEbHAod4Zrk1zOQlvyXBTwPM22p' },
  },
  {
    name: 'airdrop-claimant-445',
    address: 'agoric1nd9tsz8y8vcz85gw8z5wlek465kkn9z358uzef',
    pubkey: { key: 'AoRQqcyPEsIxNstDqqWqg3Ddu9MRqwttN++W2AE3nYJA' },
  },
  {
    name: 'airdrop-claimant-446',
    address: 'agoric1c89730dh4secsxn69flyfr0n8ya25jtdnqltkw',
    pubkey: { key: 'A2vN10QOFRVzG5KubZblRMdPjewBDl1i54YA3ufKJvmD' },
  },
  {
    name: 'demo-wallet-1',
    address: 'agoric1rds8pdacnr03eavqwqh4zaxsw9laesuzvp5f33',
    pubkey: { key: 'A27MQekfLO7Cp0Mm/bRujL0MXD5Tf+yBXUWH3kWi0cRK' },
  },
  {
    name: 'demo-wallet-10',
    address: 'agoric16l0staceu6zzpsqlygytwztw6g9q7g4maxdj5r',
    pubkey: { key: 'AkkrXkzFILsn1cAKAORstdtF0LwwjGQO3z3GfmgvgWWT' },
  },
  {
    name: 'demo-wallet-100',
    address: 'agoric1qh36mvz7wzq46wgx3hg35jpqku7ulkhh7a0894',
    pubkey: { key: 'AsODp6rp7LmFKqI2GK5go5GDbhwVBkQTOKp6lhsgV+yM' },
  },
  {
    name: 'demo-wallet-101',
    address: 'agoric17ppg965j6z20kcmqr0zswl53hsz40p3dnqk60h',
    pubkey: { key: 'A7vE4pbVl6UKTmfH+g9SppBqGQB8bPantxCTSRUTETbx' },
  },
  {
    name: 'demo-wallet-102',
    address: 'agoric174y2z7u4capkncyx7zhkhslatke5s53fvz4jfc',
    pubkey: { key: 'A0l3xVY3UpCMhAqzmTbpIzV98aA5b0V9uyWsp1aYd/48' },
  },
  {
    name: 'demo-wallet-103',
    address: 'agoric17teak0k6achz0054rjvgczp0jr5hew3x2z7wdp',
    pubkey: { key: 'AzgJkqf6nOW7zqGo9fqDWW6FQnxpdHY4smV8aLCWNZ0N' },
  },
  {
    name: 'demo-wallet-104',
    address: 'agoric1vz24p0spft5sphjqq8am6xgrvvdguy2jk9klue',
    pubkey: { key: 'A1BwAyPO0Bi52xqkwlwKk+HXoV6zXAWCd2uX5klEcYIo' },
  },
  {
    name: 'demo-wallet-105',
    address: 'agoric1y59m74x0cxlcj7ysf52a0jq7yz3pd0yd5kvq7k',
    pubkey: { key: 'AnHCbWLJReynYmMQEf8jjESroJ3+ZpSVSEDZIl7FAesN' },
  },
  {
    name: 'demo-wallet-106',
    address: 'agoric10h7sl8d87gmryyddy9f0yq2w7qkwvczwe7nfex',
    pubkey: { key: 'Ah/j7NVdzzlqVgrGHNR1NxvW9xHz7Q9VlFyt1NqLkAkz' },
  },
  {
    name: 'demo-wallet-107',
    address: 'agoric1nycv2538st4285g6rvvj7gt5p669wsctxg6vx7',
    pubkey: { key: 'AiUzlFJYW2Dr/D3JFdqanM68bhrQMPiyBZO2ERrBiva7' },
  },
  {
    name: 'demo-wallet-108',
    address: 'agoric1u9m8zcmhw5lez89tfsfjw4tz97aj0xs65euz24',
    pubkey: { key: 'A0C9FLPYgkekw9ZHkf+SWapkohq6C01fD0yavaVx7XJw' },
  },
  {
    name: 'demo-wallet-109',
    address: 'agoric1kqf386r58hrt6t97jf5zn0ulv75reuhhla7qwv',
    pubkey: { key: 'AjEL+kFHkmZaVSZkdPj6Afm2auZKKXsWoyZjlwF/XvI8' },
  },
  {
    name: 'demo-wallet-11',
    address: 'agoric18ywnx0c9j6q2u3dnp7d0f36fgvy0jv7r0tu7hs',
    pubkey: { key: 'A1/NeLipMu4Q1lCR7fdGyQZDWby3NCRN+KIgaRttQ+dn' },
  },
  {
    name: 'demo-wallet-110',
    address: 'agoric1j9lv7jn96fh2f0pr2l3ha78e2phlumx4sgf9lj',
    pubkey: { key: 'AsBYa7t6RkZZT952kbo5ZzF4vOM3zXzrJNQDVdz3FMVu' },
  },
  {
    name: 'demo-wallet-111',
    address: 'agoric1mufg6kxascfmfyaxacys8j89ujzagyfjr6tzx5',
    pubkey: { key: 'AqimjP93vvmVZyokC0we0jcWuTf2GbuRJwquPqEmnxof' },
  },
  {
    name: 'demo-wallet-112',
    address: 'agoric1vkr454vhf8mct85uww2mf6e0sttmr2ldmg2h4j',
    pubkey: { key: 'AnwMSEkz3GASwOx2Ap3VnEIIfObsRf2f18eDF4UC+tNF' },
  },
  {
    name: 'demo-wallet-113',
    address: 'agoric1vhlzxmzjkwdtu9kfqmjtz3a43jlc9evmasm0x6',
    pubkey: { key: 'Ahxvqth5Xb+YnKJjcC5ds8x4mL45/Wb3GDDRtkEDAgsd' },
  },
  {
    name: 'demo-wallet-114',
    address: 'agoric1vasav046av2lfua2cqyp8v8jz4h3nzpvlz0944',
    pubkey: { key: 'A2oIyhdATIFo7i2b99HSYK7AmCYxQ5YP3Rs/VZ17V57N' },
  },
  {
    name: 'demo-wallet-115',
    address: 'agoric19tgzztrzhxf8n7csa5pwj4kecqjgalskpk9wp4',
    pubkey: { key: 'A3jss/OaS/NZGCjddmlAwg4uul2gdTCxi5crACXhjq7B' },
  },
  {
    name: 'demo-wallet-116',
    address: 'agoric1yy6js5yea767gxrzgmfc83ycd2fqk3eezcdc0t',
    pubkey: { key: 'AxX+V3gEmSBBUfwxuW0qsbRRICy+fC/gLnOa3fzG2y+s' },
  },
  {
    name: 'demo-wallet-117',
    address: 'agoric1tjfsupjfluey22sv2y64s6kqzqt3d20xhwfv6f',
    pubkey: { key: 'AkLjDcUhQ5nBeyLcoWzmNGCkO4aTOUr4EYdSwfWsWzPR' },
  },
  {
    name: 'demo-wallet-118',
    address: 'agoric1ydqjeke6d6q32ludejjm4le6248eete8r3zvhs',
    pubkey: { key: 'AlU3vQ9tyuFc/Wg047zU751HRwRgun5DOjh0lgh7z/n0' },
  },
  {
    name: 'demo-wallet-119',
    address: 'agoric1tzc3n9tfak9nnggzcfl7kuvs5w8lzehlgy2n6v',
    pubkey: { key: 'As83tN9j8LPBW4EM/C3plezJFzf4yy8DiFp7bCrehx8m' },
  },
  {
    name: 'demo-wallet-12',
    address: 'agoric1twh4ex58yv4t6fuuthv2qj50n3l8vkep088k7j',
    pubkey: { key: 'AxUvPXaQNGe8kHZNjjbvaUVxwmGAKI9eG2SaLoS5NtxN' },
  },
  {
    name: 'demo-wallet-120',
    address: 'agoric1hjqck9kklhhrquj4pyhlttulfas90er6xkwfz3',
    pubkey: { key: 'AnAIRxM/SEEqj3naxq4GH0F9125BHbIpEDLwfWEVyJHp' },
  },
  {
    name: 'demo-wallet-121',
    address: 'agoric17sw0hrc3wx8ncfdpa7d95p9feh25zeh902j9q6',
    pubkey: { key: 'A5WIMW7aHv1arhPJOwUDmjFrpgPPCpzL0lIVd8kbthQR' },
  },
  {
    name: 'demo-wallet-122',
    address: 'agoric1vpksna2cxvye0h58rdwwtu0kjge4c7yuzujmya',
    pubkey: { key: 'Ay3SbIZMfhnUzoZR2VV/KoHLIDlIfzJaERrdZ/Lw9vs6' },
  },
  {
    name: 'demo-wallet-123',
    address: 'agoric10ml66xcex90jxu9ekxsa8a8ngnx35gfx25mp9j',
    pubkey: { key: 'A9/u52TY9eVwSbB4ehjJN8gSG3wmUi8hJP2FBy2J44gf' },
  },
  {
    name: 'demo-wallet-124',
    address: 'agoric1md0e7nzl5q9fp24ka82kn8yw63ry635ucad536',
    pubkey: { key: 'AmjVECk2AVsRoTDG09vhzGd1rGDlTZoS5e9bWZ5uN0CH' },
  },
  {
    name: 'demo-wallet-125',
    address: 'agoric1sknau9jyhadees3pfgmttjjvjakylh3hvxaeha',
    pubkey: { key: 'At69sqh+RVxk7laSEBUKPrlGYZGN/CZ7Gpyer3N0jlBL' },
  },
  {
    name: 'demo-wallet-126',
    address: 'agoric1w3vdtpgwvt5h98lt96m2all8cw70x0knef09f6',
    pubkey: { key: 'AtE0cXYN7hxcFvCvKLiRab5396RbzPElYn/1IS9qv+83' },
  },
  {
    name: 'demo-wallet-127',
    address: 'agoric1ea3k4m3a2eys7jnj4wqauwclhwpyazvyudchu3',
    pubkey: { key: 'AkIB7fnBRM0pYNLR09gcAfucR2N+l89YkohPdWtV7l5J' },
  },
  {
    name: 'demo-wallet-128',
    address: 'agoric143pnk4mqz6yyym52psdmzttaglml2tg7w0td2d',
    pubkey: { key: 'A7c67bwD056xNG78CPOPataqiAlmmqwATioZ/QsxfbDK' },
  },
  {
    name: 'demo-wallet-129',
    address: 'agoric19tqkazhgked6xaeeejw5h3cu7qhygvt67x2z30',
    pubkey: { key: 'A6gN1UWeOelB3/WDOrF7y90FStfIPAo3i+ib3VSKQrH1' },
  },
  {
    name: 'demo-wallet-13',
    address: 'agoric1wxkup9w2qm5qt87uyqeea6t5cr3errt085xr0p',
    pubkey: { key: 'A2U5Qe47alsNpUcxzQsk9SNS1s2BGEDPX8fbqpjZ5S0C' },
  },
  {
    name: 'demo-wallet-130',
    address: 'agoric1telmz2vkrflj857l2cejgxn7vyvc4jcl7pv9wr',
    pubkey: { key: 'AhVrQseRkfYS7BU8Jhd9sa/IL43xC1cJv+9niUZGTBMS' },
  },
  {
    name: 'demo-wallet-131',
    address: 'agoric1cjjleul86ps8ap7lqrmglfczka7hc0ydkdat08',
    pubkey: { key: 'A9pjHLM2j89rN7fCqCztu6bl9WQFbq/u6rRoRsN1hOEV' },
  },
  {
    name: 'demo-wallet-132',
    address: 'agoric1cg7f9h04qtngx53ztdy3gtgkzqqs4sm64melvv',
    pubkey: { key: 'A3O+bSKs1K9c5aQ9D8+1p8u0DPx31Sgc8Vsh/2QglwTq' },
  },
  {
    name: 'demo-wallet-133',
    address: 'agoric1h99ghfxhfge8cm5xkvm9ckxslwp2k9l9a5fwp4',
    pubkey: { key: 'A5UvuPdmu9/Oi8Rirwc2OsXEvEPSZNIE+BsQ1Cjb0ElP' },
  },
  {
    name: 'demo-wallet-134',
    address: 'agoric1dqpeshl4nakqkrpygajwwmt56eaemyyah2g9ce',
    pubkey: { key: 'AuWf963AqDCarpuhE2Rs8TjLUb33TCLpzwYssB3pkSOV' },
  },
  {
    name: 'demo-wallet-135',
    address: 'agoric1e3m2v5w8aaqdlm80aqell0ke76ul05h3mg37ts',
    pubkey: { key: 'AmxSpnImhckHGlLJsyIXV62uI31IUMUvKxk0WSmBCsyc' },
  },
  {
    name: 'demo-wallet-136',
    address: 'agoric19fuwudx9zvcm63p3rexl5jvpj9fucxu3v5kg68',
    pubkey: { key: 'AtJ53z+lCojbfnTjYjVcLPRQG2NQDTk1UFZCksWC0Mpv' },
  },
  {
    name: 'demo-wallet-137',
    address: 'agoric1ly65nz8kvygv2ujjy7j6pruzzzc3z448cvsfe2',
    pubkey: { key: 'A+v15wcl3BYVXxF7BamOePElJVRFO0hMwvl10WIVWP3g' },
  },
  {
    name: 'demo-wallet-138',
    address: 'agoric1gm8r6xjvaxz79tccrr25hnfem9j5nkrzehajqs',
    pubkey: { key: 'ArRkYNvikJbawCil6G8zSKRIiFqEAR8eU5VyDCUK34io' },
  },
  {
    name: 'demo-wallet-139',
    address: 'agoric1eu63p2dxrejd9um2vl4gt0ttwdnluvlzchuej5',
    pubkey: { key: 'A5B1o4/aiEIsE5uTRvbedDFjRImI9b8wyjXKpRvW8z6A' },
  },
  {
    name: 'demo-wallet-14',
    address: 'agoric124y8c2vazc0xgrfsklutaaqwap2u5lx0exy3eh',
    pubkey: { key: 'Au/MDoRs7WTmk7HooQ1Vh1BfEjEekg/U7UGx7rdHgQkB' },
  },
  {
    name: 'demo-wallet-140',
    address: 'agoric1n02wvj66e8k8ka97k8t7mk53x9pv85nsn0a9ep',
    pubkey: { key: 'A1iZjhfsVYUbkqKKrr4GtYDDs+tlq5W7oTofuumf+2md' },
  },
  {
    name: 'demo-wallet-141',
    address: 'agoric103y5hly5hmnpcppes5lchzz22w86emvc96v9v7',
    pubkey: { key: 'A5xBdRXTxiLgzUqyhy20TqXC0cTR5WfzeoOl8ldj83IS' },
  },
  {
    name: 'demo-wallet-142',
    address: 'agoric145mdkc5kgjt2qhele7hmr35upculwr2w7ymq0q',
    pubkey: { key: 'A/PwKclFlcsDW9iIVUQnkKfYUtKqRvXJRJtuDySHisuc' },
  },
  {
    name: 'demo-wallet-143',
    address: 'agoric1gad0zhw6mgaw3ck8yvqh4p70jmx8v8w02vgtts',
    pubkey: { key: 'Am9UD68aVC8NphmZSuMeVX/hTsAWGz8R5tzZqLHd2H+1' },
  },
  {
    name: 'demo-wallet-144',
    address: 'agoric135aq7rap2df9u73rfsp93g29kk5dsc807dkrly',
    pubkey: { key: 'AleQ/qrANxisfj2y9qmMTLQ5yX5Wc9V7zUPHWakvGkY8' },
  },
  {
    name: 'demo-wallet-145',
    address: 'agoric15jqlkplqnmgfwf063pwk836r5n48cluvcm8vwl',
    pubkey: { key: 'Amv2Fvio9Zn1OaWcDVgf5cCCoy3chrT2iE0SFovgPYG0' },
  },
  {
    name: 'demo-wallet-146',
    address: 'agoric18675phr542fuf5xzdcyfwfx0hd39j3zyuh5jna',
    pubkey: { key: 'A+VgnJw+DO9RGYJ+CRLDUPVx8/ltf+Ms9/meBu/xzAAZ' },
  },
  {
    name: 'demo-wallet-147',
    address: 'agoric14xywafy208qc65an0nmpmgfdr69mnqwn0qaut7',
    pubkey: { key: 'Ah8VOSLTLj4qW21vbWFxGwNwgSxxpGVzjeoSkQdHO/8q' },
  },
  {
    name: 'demo-wallet-148',
    address: 'agoric1l6ed0ga2pnmpgq4twhpw66hwyuv82kd3jpt6gt',
    pubkey: { key: 'AhfIJ4JyxhYkrWxSGyO3YEz7X7yITkpzD+PSBd0h5veV' },
  },
  {
    name: 'demo-wallet-149',
    address: 'agoric1w56tpemqut9lmc5sl7d5n6at2mhaf08j386grl',
    pubkey: { key: 'A/6Jz7eZ4G3a5sr2AVzybbxUompt1k2aeH7/EXu+Zqo9' },
  },
  {
    name: 'demo-wallet-15',
    address: 'agoric1pvf6zummmfda7zargf6n6d8gxf6h8l6a649wx8',
    pubkey: { key: 'AisBvPlb4uNO5h2Q/PYIrgScjXfUN+fLiBG6/AfOd2va' },
  },
  {
    name: 'demo-wallet-150',
    address: 'agoric1ry8feg7xanqa7y2mu9wsy4655s3v40zzc6qh5n',
    pubkey: { key: 'AvrYT8vu8MEdwy7f+f1rOhfKaUA0n86O8msvhr4+AHu1' },
  },
  {
    name: 'demo-wallet-151',
    address: 'agoric1pwxpv69aflzl0ekmwaa8ucpqwsvujv6mhkqezn',
    pubkey: { key: 'Atm4VNjzak8v6rjjDr7638Kn6uFxE7P0I1srcskF55Y9' },
  },
  {
    name: 'demo-wallet-152',
    address: 'agoric16mhx5cpppym7rrr2hct9de2022p45rhy327hay',
    pubkey: { key: 'A+PyjhNjlcJf53NM7OVXHaL9G6Fp8wxRq99euM+ZcZNl' },
  },
  {
    name: 'demo-wallet-153',
    address: 'agoric1yvrjp7aqmed864ayg93zxnyrjm006eu0g5uqkp',
    pubkey: { key: 'AmVUjpFORLqxgeI2K8vheaIC9urKOScfB1Q9hIJzqSeI' },
  },
  {
    name: 'demo-wallet-154',
    address: 'agoric1gx2vcaax44lk6utu9m398eklgzmfxhk09ptzzx',
    pubkey: { key: 'AqZ644kJDnUSWX8UvMeu2PAUkQqRxH3/8PHoCWaRb6TU' },
  },
  {
    name: 'demo-wallet-155',
    address: 'agoric174javdwva78vqz4ksa2v3ts5p8ht44fr4xm4xm',
    pubkey: { key: 'A8Wzv9ETVtzyQWjh1h1pWn58t7j1jv1mWVHTFUeTa0Gh' },
  },
  {
    name: 'demo-wallet-156',
    address: 'agoric1plqxmwn0x53lqd48q270ddme4y3rrtrlhfxwdf',
    pubkey: { key: 'AluvLIk6kFFW4BhFpi1vVgVCbxYZazGrwvQENmKlpQBZ' },
  },
  {
    name: 'demo-wallet-157',
    address: 'agoric1p04yhdrk6cvnrgpgej02mm0g9n7exgy9k74k88',
    pubkey: { key: 'A9fhkS65c+YtoF3iqIXo57vjNDPO0FFqd8RP4PtsLiXY' },
  },
  {
    name: 'demo-wallet-158',
    address: 'agoric1ce39fuee2gpz8jeulnp65j29x3d894xdskaye4',
    pubkey: { key: 'A+wmvcYFSTcg5fnij9XMknWctmc/P0BjJm0DCoCUQ2oB' },
  },
  {
    name: 'demo-wallet-159',
    address: 'agoric1mf2yqlx32cyuc26x6fefq50ch2y6aatagm0sye',
    pubkey: { key: 'AmDJkx8oAAtzL8QHtcjTQ+zIdBnZv4EKTgV6BxZ0kxy4' },
  },
  {
    name: 'demo-wallet-16',
    address: 'agoric1utfnr0hkj7mj6ruppqvj9zg56rheetmk84cj4j',
    pubkey: { key: 'ApsErN5dccZZap1hzF742p7EKDn+i9mu4KZLhxLXUVb9' },
  },
  {
    name: 'demo-wallet-160',
    address: 'agoric1y706cncegd0kkfs467syc928plcrndzusdrg3u',
    pubkey: { key: 'Al7/KEPFY8LfQ6kjlpbHZMtRgwet39XttYDFkipttDKu' },
  },
  {
    name: 'demo-wallet-161',
    address: 'agoric1veuk8ce855huwr07d66468h4mtlp308ezfuv7d',
    pubkey: { key: 'A/j0EZxjgYT3m8EwMrEPmoiu6rZFBUu1IrhXbCyznJkG' },
  },
  {
    name: 'demo-wallet-162',
    address: 'agoric12ayp0cj2y54xp6yxra3gx6v0fe7duk6frhemjd',
    pubkey: { key: 'A0mi3RLB/IeVHN/AmQomRWEEHHzriVAjkHlN+fVDFPdT' },
  },
  {
    name: 'demo-wallet-163',
    address: 'agoric1hyxlfk5jnnf52qyeyt5jxa3dztzk64hcxuwt7f',
    pubkey: { key: 'AsWpPhUDR7ua32p/z2Ep1UwGoK1jktdFkJB9wLxffSmw' },
  },
  {
    name: 'demo-wallet-164',
    address: 'agoric1e0thlk0pvmaxfq6y6lugluhu4fdn5c3kwagkkq',
    pubkey: { key: 'Au+W8GuWirYmLhAVxQ9xq+diID7kkVpWJ11gSbusHILG' },
  },
  {
    name: 'demo-wallet-165',
    address: 'agoric1pjqk2y9lweukcery60tquwd76pe46ymsargfak',
    pubkey: { key: 'A+44S2ejtVrvXp8fdYg1H2TkPBHnSwSTMNgvr2TNBhiV' },
  },
  {
    name: 'demo-wallet-166',
    address: 'agoric1xun0s2n23cghm7v2fddmazquujj87xz0cj0al2',
    pubkey: { key: 'A43rkBAZClIolz9pAPWoUfx+cQiPUs/Mwlhws5SpVAAV' },
  },
  {
    name: 'demo-wallet-167',
    address: 'agoric10gfrk350npe6m3m9mazwlqqecsfgl9pzawn7q3',
    pubkey: { key: 'AuXRrvnbda8SkfYm57MxCK2N9REe96CT5ZR60e0Eg0wt' },
  },
  {
    name: 'demo-wallet-168',
    address: 'agoric1t4wq97hdpjmj6k5tkjpm6m4jucdh6ngz2t94sa',
    pubkey: { key: 'A8ieYq/0ILpWylx2UTOMyqlXPs7kgtsa1ibR+c8l4uLL' },
  },
  {
    name: 'demo-wallet-169',
    address: 'agoric19y8ncpv2gyn8szp0p8es6r7nkqu288j7v8mk7d',
    pubkey: { key: 'AjGFUntOBm1MERsz1c+RU8JXH1+EX8OWXroD/Y5kju4Z' },
  },
  {
    name: 'demo-wallet-17',
    address: 'agoric1z38tmx5hy2fgejyvehdax2m80ea6ds4mt75zae',
    pubkey: { key: 'AioWrKxt2/rOIYi0Hjkf97w56IuvwM3zhOfF5Q4iWeW1' },
  },
  {
    name: 'demo-wallet-170',
    address: 'agoric12h0yhkgu2c33vhxejsxl7amu52ma2pcatwwe97',
    pubkey: { key: 'A7qaEYbBjWz/6JQsup7BLLraFaExCsrnDh9ytka39GT5' },
  },
  {
    name: 'demo-wallet-171',
    address: 'agoric1h6ckg7cre27xpqlh9l4yudngq2vvl0h5hzye76',
    pubkey: { key: 'AnbthOiqOFC0/VHw0l46hxpE0w9bbAgJeJ8K6tqPFWQM' },
  },
  {
    name: 'demo-wallet-172',
    address: 'agoric1llz7g9dk4s0k47jltkytxjmv02rllq2qjxm39t',
    pubkey: { key: 'A/ZPb61GTm+ZrK/QmX5c/PGqO+Hb/fjnGre85dPGJRrj' },
  },
  {
    name: 'demo-wallet-173',
    address: 'agoric15yv3z45rm3cd3ml0pr3pcqmz43uqxu6s4drnhf',
    pubkey: { key: 'A36HeMyPjzQxg7zxEcmUs+mH5P+X86RYIrx6i4bD/VT2' },
  },
  {
    name: 'demo-wallet-174',
    address: 'agoric1mzgzyxzwqm5959d0hjqdaek3nxwyxhudapnsd8',
    pubkey: { key: 'AmoIkbTDtY1J9DTN4xY0xKg5eLeR7KTOIRNRRwWP1Bv4' },
  },
  {
    name: 'demo-wallet-175',
    address: 'agoric14ye3kv7r2htygwreegn6uf9eeujaywtvswjz4g',
    pubkey: { key: 'AyqNmnix5zq5qNz1tdwnzpObQntTf99DQ1BGKFsisr8E' },
  },
  {
    name: 'demo-wallet-176',
    address: 'agoric1thdnh74w85sc7ul85rzjvexcc6z9984hv8mv8c',
    pubkey: { key: 'A9IoN4ER6kTw+Y0XDaXeoKlqiXXJ99x6KtA0iEJUGGki' },
  },
  {
    name: 'demo-wallet-177',
    address: 'agoric1qedsn8v8r47m7seyv77ua80m0fm30epfcqwwd9',
    pubkey: { key: 'AqMg8t07tGTqugo38L2iWJZSLYxp7XbOesVBGucgpXKO' },
  },
  {
    name: 'demo-wallet-178',
    address: 'agoric1rjw8znn49tdpadf289wjv4lnrjqnfmj2a2y6nr',
    pubkey: { key: 'A2CsT5wdeOiJn0vE9cenuLVsjYKJXUgJz725+5c0iP5l' },
  },
  {
    name: 'demo-wallet-179',
    address: 'agoric1ze749qpsawhhsalh8xya6ehhd7e5rqhqseca8q',
    pubkey: { key: 'A8CR0MLkKU+oykb4Hz6jseWdFf+w8bAYjhqhHeKf45i6' },
  },
  {
    name: 'demo-wallet-18',
    address: 'agoric1hr6crzxar7y6zk6ezgm8j7t0cagk8wdpgrt07l',
    pubkey: { key: 'A3k0VUgdy5X2HjyxrUemgovxyHqD9zebzCNU2pPgpvfG' },
  },
  {
    name: 'demo-wallet-180',
    address: 'agoric1jnxaxv4nngxf0y34zd4kzj5t465ep94azpnwj0',
    pubkey: { key: 'Am/h2Cct5JUaYQcLblUNnGcTOi/gW2S0PBEAmTHDX+jz' },
  },
  {
    name: 'demo-wallet-181',
    address: 'agoric16avadcw2nsrmd5c3m4w9p55x03cqu7f329qzwz',
    pubkey: { key: 'Ak4MXrcO0eaYZM3POhzg8YLhp0F5S+8oPN5qJEzISOBc' },
  },
  {
    name: 'demo-wallet-182',
    address: 'agoric1c3u5nm6czua2ln6wnwrtzxut5hpqm205rg7rk8',
    pubkey: { key: 'Ak2hc9jx73KZNJKM38PbT+yBFxTC79WtrsF69EcJptdq' },
  },
  {
    name: 'demo-wallet-183',
    address: 'agoric1h3p5w5hs0947a6svyvxecujmdh8a7g6rrumjt8',
    pubkey: { key: 'Ap8D/z08OcF6lN+VScqimjVvttWqqgarS3oVrw3lcNcA' },
  },
  {
    name: 'demo-wallet-184',
    address: 'agoric15hf3zw98yhs6cwq5akcjra2duapl0skkaa8whk',
    pubkey: { key: 'AiUEakGHjmpYaPMrSkWDDDEzusJLpoMEDwltLKj9CYAr' },
  },
  {
    name: 'demo-wallet-185',
    address: 'agoric1gpgwpwq8adxh7xl909s3kh6hefew83vv6fcxuz',
    pubkey: { key: 'AluvOkkS/0TR3dy/TcPpHUYYGCq5X6QCFz3j9y2aOZi+' },
  },
  {
    name: 'demo-wallet-186',
    address: 'agoric1h9fut7f9r2cxfdt56rk97mfk7mfs9py9qvgzt8',
    pubkey: { key: 'Agn97DPN4tBpdHiaRaHYiJ3x/KiPwYasOd6s2qV2Er0z' },
  },
  {
    name: 'demo-wallet-187',
    address: 'agoric16xey4y9fnf9fxn6wk0dynf24jt5yq46k9qf5ck',
    pubkey: { key: 'A49Z8W12BTsNoSZbPhCbVHbAAXpCih125GqxF0KAfDoK' },
  },
  {
    name: 'demo-wallet-188',
    address: 'agoric14sf8sursfysyvjvc4mwz8r43rldhxl9aqpu7hc',
    pubkey: { key: 'A1TCB+rdwrtcqBedECzsAJsJy1IUpq6LhGtw9i4e74ez' },
  },
  {
    name: 'demo-wallet-189',
    address: 'agoric1afxl0v9v96wrw3mkzvcahlc3kaq7dpf32ur6qg',
    pubkey: { key: 'AyFRvStbBuUShYsJDTRtHS7ARS+xEtNNFay7hIhPhrPx' },
  },
  {
    name: 'demo-wallet-19',
    address: 'agoric1wyahyxyr2hayx92kfyxynpng3kg332p0q4taad',
    pubkey: { key: 'AtyHb4KAynghe6wsYbGFHq4F15dJS7H5DBeofSx9i3N8' },
  },
  {
    name: 'demo-wallet-190',
    address: 'agoric1hwvcq38rjdu4wfnfgheht0770vav84x0uz3fm6',
    pubkey: { key: 'A1OGpjOdCGtz4F1RmYVz+Hh69YddLmmIQbQ1v9+r27JU' },
  },
  {
    name: 'demo-wallet-191',
    address: 'agoric1cvkqsvz0zhd0s2yfqeeazx4gwgkqfwa2kcj2kw',
    pubkey: { key: 'AuofjtKXg40RKoBzeePW9zUvMqFsjPm5Weaw7Ip0F0Vn' },
  },
  {
    name: 'demo-wallet-192',
    address: 'agoric1y8m9052ywemyac629tmtfxv5jus52znawvujyu',
    pubkey: { key: 'AygZ+22l/MAddjRwaOLWUnThqu740ft5XrLzGUTaYh6G' },
  },
  {
    name: 'demo-wallet-193',
    address: 'agoric19p932vhsuhl2umldlcmx2vj8qcd8xztxln4xy6',
    pubkey: { key: 'Arorn3loL75eZFUIUYLq68KjTmx8wRrb5X7GQd99FOcl' },
  },
  {
    name: 'demo-wallet-194',
    address: 'agoric1fl2unk9eyqytm4p766cawsgl59njsdvqxw6jwf',
    pubkey: { key: 'A5eaQwbZatRyJlLrfmZzQQ0bIuDhNDYOFCemqo7wa7+W' },
  },
  {
    name: 'demo-wallet-195',
    address: 'agoric14yh2ce4kpwnqy9jg2jze928m738aksk66rtmsx',
    pubkey: { key: 'A0spX/De3oYSaBGyShKTRzJalKWwGrwWqC9ZaUVuiuJq' },
  },
  {
    name: 'demo-wallet-196',
    address: 'agoric178km68zda0e3hdczu9qtuun0924f76882dc6xy',
    pubkey: { key: 'A9aJHfwwVBTWeT1bxTj500+PwW/ZhzF94Dc9MLob8yrj' },
  },
  {
    name: 'demo-wallet-197',
    address: 'agoric10xuhmjjc6hjy3yzg5txj9pcd7fz3kh0yqx49wz',
    pubkey: { key: 'Aj0XBvb+Evun2D9yOxOLixl6PtdeHMw3c+/cmY2YoXFq' },
  },
  {
    name: 'demo-wallet-198',
    address: 'agoric1v535gy8l4ks0y6uha3f55uu3sj5leeyhtppu2c',
    pubkey: { key: 'AzKXr3dfjSO8pTprLJB187c3hy0UAVWcS7+HdPQfjDLI' },
  },
  {
    name: 'demo-wallet-199',
    address: 'agoric1lhaylaz5xflke667jl0xuv8dwesn74r5nya2kf',
    pubkey: { key: 'AoubuTqIRXbd0hDiMqJAnYk4aj/MA3i63tf04ZPEwdTg' },
  },
  {
    name: 'demo-wallet-2',
    address: 'agoric1kdjtqxwdzj5mkaq86je8twa3w3zt73zlvpk8gx',
    pubkey: { key: 'A6mc2zadLQ++Sb7Zr5kmF6hAw6mrcjkkGsli96GsA0sH' },
  },
  {
    name: 'demo-wallet-20',
    address: 'agoric1p7j6jg6e47ucyegq7alj5fhsz28wn8mf874l4e',
    pubkey: { key: 'Ao2Avg597qJfJ1o+yo4Mt+CjCzji/np6Ut7o31+nguEK' },
  },
  {
    name: 'demo-wallet-200',
    address: 'agoric1y0ers6qxjw0gmk5pn6273z0dxt8pj2hd4xfc3p',
    pubkey: { key: 'Az9T38CZO89qE+rq93UH89UOQRwAhEcOQQzAB5P5Ebns' },
  },
  {
    name: 'demo-wallet-201',
    address: 'agoric1ue49942cttamcdunsmvk098xgncz024fqgc6a5',
    pubkey: { key: 'ApavIX+2UTJe2vT2QlfzvLI7GZqWnYITfpVG3XsdOI/N' },
  },
  {
    name: 'demo-wallet-202',
    address: 'agoric1mjkfe8mxe73kg3hsluffydsq77rujuajs0jq5e',
    pubkey: { key: 'AuYYk6XdvULVx95VoWk53Mx/hNQ1lbXwjL31LaQ1melK' },
  },
  {
    name: 'demo-wallet-203',
    address: 'agoric1hm3k4cp4a0ktwha07eyjxryppkk5yy4hj8vvlw',
    pubkey: { key: 'Akd807/mKfCSxh1kJJW0vUvmuMX1beQFJ29BIM5fnZZl' },
  },
  {
    name: 'demo-wallet-204',
    address: 'agoric18cqhda2lc59etrqf9m8dwvhsp0r7hhntm3400f',
    pubkey: { key: 'A5PeyWjm+V9pRAlUQHRLEdk4E6DdIwBO4BaYgu0DvQsJ' },
  },
  {
    name: 'demo-wallet-205',
    address: 'agoric1uapr89ympnvle04hmzetqyda3zn7ju08dzkmju',
    pubkey: { key: 'Ak3w3h+kO/jose49Mn/ruyy5jqnsVXfk2FHTAtW+SkcG' },
  },
  {
    name: 'demo-wallet-206',
    address: 'agoric1kst6vs2e63lzv4wqgfx2d9ng5t8pvww8yfjhls',
    pubkey: { key: 'AwZ1IKOTPkif0dzP2jUSDWxlHQcsYjAxuNvWGHft2CAK' },
  },
  {
    name: 'demo-wallet-207',
    address: 'agoric1479e2yuraphqkx2uvyrlz3vd2xg72xhfhhpqf6',
    pubkey: { key: 'Azn/NVIb3lUo/Uw27zft+OntJbCjdpx+VOSEMf0O7YG8' },
  },
  {
    name: 'demo-wallet-208',
    address: 'agoric1ufzdgtls9ngxq9xprdf8gw7396dp0942xymjhe',
    pubkey: { key: 'AhkC4dp0MSADbbxI6eunKSWxDCJe1zDZfZZNO9+jwAqL' },
  },
  {
    name: 'demo-wallet-209',
    address: 'agoric125fnqmn2xy5ypv2nq7txjvjpztvdmcpce7yxa0',
    pubkey: { key: 'Ay7NrI4YHCFmkJdMZlQmjsCjC7I+7JpSydk6OhZBIluO' },
  },
  {
    name: 'demo-wallet-21',
    address: 'agoric1tdmkac5p3uj5d6jtjhlct3drtgtsh94k0nec5g',
    pubkey: { key: 'AqaGzJJtues4PouL8EfanXhdN+AIt7M7nOIs+0gRvdnH' },
  },
  {
    name: 'demo-wallet-210',
    address: 'agoric1nl8qn0uvy5p96d88n37mh9fuqv9rqjwg9pd76e',
    pubkey: { key: 'Awcv93O5apezJoHWwIDLu+thoNBlV1GQuoBigAhDypDB' },
  },
  {
    name: 'demo-wallet-211',
    address: 'agoric1c095nfege9uxuxf8e80sfat97cszxntp7n055g',
    pubkey: { key: 'Arbz/Fady1FnU8srrK1I7uZmS+nT6dhJutgt4xAt788l' },
  },
  {
    name: 'demo-wallet-212',
    address: 'agoric15xl9ucyzw84h5s3v8n40dhra007naf5frh55sw',
    pubkey: { key: 'A35G2HDyYlJ9BonZ0g2e9njdfkes8r7rAthLFihsmMsG' },
  },
  {
    name: 'demo-wallet-213',
    address: 'agoric1efc0xv77gzvsruza6htpr8hnvr0qxax5pvvhym',
    pubkey: { key: 'A9DxDRnSjrytm5YwnXfWxY0p6+1CZflrj9QewtJW93FW' },
  },
  {
    name: 'demo-wallet-214',
    address: 'agoric1k0sppycyzeygc52sfq0ts3qttswy0209mf8ae0',
    pubkey: { key: 'A0dwLCbpsKkMKYtuwEzRh1VviSRsH58Z5mqEooe275Ta' },
  },
  {
    name: 'demo-wallet-215',
    address: 'agoric1gm5khxd24eeknw275mdqt0nuqtg7eyq85flv2p',
    pubkey: { key: 'Alyqnz1eu05MuSAOhLk1TSPf0pD6ylCUzBigffI/n6tH' },
  },
  {
    name: 'demo-wallet-216',
    address: 'agoric1qyd6kmq50d9fxmgwm5g37xa78e6pyh5d4dn8l5',
    pubkey: { key: 'A5zpPd5xImXhL5WhC1jhJtriDikehNE7P8PAFAUcYCB8' },
  },
  {
    name: 'demo-wallet-217',
    address: 'agoric1s48zvqdj5sh6uj2ny3uwm5gzjh3uel6u0ult76',
    pubkey: { key: 'AhPJwJB5slnpXuV5juA4iqLaF0EtPJagRdAQ6rZXTZmh' },
  },
  {
    name: 'demo-wallet-218',
    address: 'agoric1q746fr73eucavhpd6s6f2s0t5s0llern7wual9',
    pubkey: { key: 'Apk/2S5zwK8oAzGtR8BfbvqthrO7n2OmPQSKklJpinCZ' },
  },
  {
    name: 'demo-wallet-219',
    address: 'agoric1rky8vdwk8nvcf5fhh5979uh4nfp7exk9sv7ykz',
    pubkey: { key: 'A4xRUiruVDDmyncp1zHrMJdkEKF87z8F3uLe45mmIJec' },
  },
  {
    name: 'demo-wallet-22',
    address: 'agoric1axhk5dxxzzz5vc0x2gaqeqnaw4nzp3qn09wht4',
    pubkey: { key: 'Aw3jVhDLHgyJ3bDiYJeIRQpV7NUE6xDm4BP3EWzaD90n' },
  },
  {
    name: 'demo-wallet-220',
    address: 'agoric1ea2htqj53v9q355yt2p5wtt9z0jc02lx9z3dd7',
    pubkey: { key: 'A1/+OZb+ZqIz/Mkj2dxGb1EzLG585TkYt39ZAMLn+ARn' },
  },
  {
    name: 'demo-wallet-221',
    address: 'agoric1naly6d29rwc2jgw9dfjgfcz8rqxzew9z90hdmv',
    pubkey: { key: 'A6403I42RtzwF1T5WrbC0JQaMxScv7EfuKRpztrrTu0u' },
  },
  {
    name: 'demo-wallet-222',
    address: 'agoric17dpjlq8y3ljzrhe0s7mu93vtmn0j6ergmfu90r',
    pubkey: { key: 'AqRaYeDfVhEkSpTiZIu6NLk9Mvm6D/2l2R62t1zKdiU/' },
  },
  {
    name: 'demo-wallet-223',
    address: 'agoric1eygw0g9fuekvw00enjp5d8g6vhh0dnm9ff7ur6',
    pubkey: { key: 'AiVFz1gwPoaIFOIw1V0TFO0r5YAgA43xspc67Vkt1gq5' },
  },
  {
    name: 'demo-wallet-224',
    address: 'agoric1sed6qgphm353n8myrrlpy4mujnjmumzgm84em4',
    pubkey: { key: 'AkWJVdE9iqlVXRezaPwFBj0SVcbduI7TTHv+rs2yNQxU' },
  },
  {
    name: 'demo-wallet-225',
    address: 'agoric1jtz4fa52cp977fy44lssskw7pyg559qrccfvz9',
    pubkey: { key: 'ArRCxh2eUbjleVSi0xCEidrIvnp82589RufddhEffWfk' },
  },
  {
    name: 'demo-wallet-226',
    address: 'agoric182mnu6c57ky48z9dq2ggckmpz2c8pjc9p2l6yg',
    pubkey: { key: 'AjteYZ11P40WgezNhzEZcdFvCRzTxwXA9pP5qKyS0xbI' },
  },
  {
    name: 'demo-wallet-227',
    address: 'agoric1s593kl0cjyerev5gnh2jec8nf4zjdcuhl0tc94',
    pubkey: { key: 'A3vx7stGQgL+Aaum9U+ONquHbfVvgPRtK/wUtI/1uuTp' },
  },
  {
    name: 'demo-wallet-228',
    address: 'agoric1ynym7yytrathrl9cq3jszyf8rdy2h0uzpgkk63',
    pubkey: { key: 'AwseS0TQKUUrg7yehVDIAXki0pRDaB9K7MnPO9CZIx23' },
  },
  {
    name: 'demo-wallet-229',
    address: 'agoric1cnt7nfvu6wpguywn5r8d4acqze98ex5kyacx3x',
    pubkey: { key: 'AlTpAlkmE40VWQxjXNcFkHZpHhMJ6gAHhKMPYTxrFG2Q' },
  },
  {
    name: 'demo-wallet-23',
    address: 'agoric1c676uxhmefd0rwdaf98ucl59zyl9wrwtryg88a',
    pubkey: { key: 'Ao6RT/VHvuLeJafXgE21YkhI+vtpD46jTOQTy24nkYA6' },
  },
  {
    name: 'demo-wallet-230',
    address: 'agoric1dxeaum6vt09pagnd20mg7s3m3g85ncyau7k820',
    pubkey: { key: 'AixQrAxMg4c9CjYbiT1HP2aSXRLfseIQeYtJ+yv2Jpf6' },
  },
  {
    name: 'demo-wallet-231',
    address: 'agoric1hftzsmpj3fcd2f2kmza7u3w34f3dx5qgqeyjnc',
    pubkey: { key: 'A0pcwg7jImNBX/GHw04w2KvalmLiZeZFOqfdrQDG5IkC' },
  },
  {
    name: 'demo-wallet-232',
    address: 'agoric16ljx5f5nxzra2syc876cmnn9zvrn9mzalh707h',
    pubkey: { key: 'A9dSPDqlI8P4UGWgEAVlohLslqhRBJxV+T65SdGU51Mb' },
  },
  {
    name: 'demo-wallet-233',
    address: 'agoric1tedsen7vlyhcsu7yu6jcv9h0zqphf08skh77gc',
    pubkey: { key: 'AnEXI1DpXgk+3tW5RUz9lO5SM1MFLytbN2YkXnDsVbGB' },
  },
  {
    name: 'demo-wallet-234',
    address: 'agoric1yspq7s95a88rzkkzq2dss0jlp0jheuya7r6pdq',
    pubkey: { key: 'AkJRaeaD1oV9b90+yiURCRtvRwLvNm6hNTchcyvYVXB9' },
  },
  {
    name: 'demo-wallet-235',
    address: 'agoric14l09whps3qlxqshvglcdyfl0neajt0h5gan06s',
    pubkey: { key: 'AxoRaOHaPbbPsI2Ee/3ZhLyb4UfiKfcsIp3jusiAF0Pd' },
  },
  {
    name: 'demo-wallet-236',
    address: 'agoric19a8dzpnt33cf3jfewx8kyvjygwa2gs58n8yhsd',
    pubkey: { key: 'AkdapB29EaPMGk2QCDsTmi/42OKHjwzcOT2YLlRUy7u/' },
  },
  {
    name: 'demo-wallet-237',
    address: 'agoric1dxrx2x3rjaf2pa0g4qpjxshr2ehswvgrqj8j8z',
    pubkey: { key: 'A43c2Cj0QSDlL6om/tVYGxed7/EZ4MlBa7+MPS+jOY8m' },
  },
  {
    name: 'demo-wallet-238',
    address: 'agoric1332js0ev85ntg38t7a4wmwnsqxks96af2fr6jm',
    pubkey: { key: 'As8RjAwvOlRxnnjRcD7vYfizYYP2xplAWqhUQQ/PdexI' },
  },
  {
    name: 'demo-wallet-239',
    address: 'agoric10xw6rzj8ajhf2mp5km575azh7rdl27jd7g8758',
    pubkey: { key: 'AuPWUBnYogk8QTQsQu5MPxoCQQOBGgaMAQ9lP/lnE10V' },
  },
  {
    name: 'demo-wallet-24',
    address: 'agoric1930rr24l8ta87fan50nc4nuxhy4smrtx0nvppp',
    pubkey: { key: 'A4I1Zon9CeMM0efd0Rv4yRL+tExtkFBWqRiWtne2q8x1' },
  },
  {
    name: 'demo-wallet-240',
    address: 'agoric1a9s9yh2wa5arplq7rxkqs6kqnu3yuqrq8zfywp',
    pubkey: { key: 'AhIF4EJPonM+LRH7cVC3FuEMvApZXXLqjktgL2vjL/nH' },
  },
  {
    name: 'demo-wallet-241',
    address: 'agoric1h5wn79ehv5l8msm983x2eka49l3sqrh77p87lv',
    pubkey: { key: 'A7VIIl48OBLD+xz/c5+h5CCPkEHLTBO/WKA09O4QFCuT' },
  },
  {
    name: 'demo-wallet-242',
    address: 'agoric1g2f6w7tz5nmu0tl5hw2z2ulr7lfhgvfm7pkcuw',
    pubkey: { key: 'Au+2Wa09yR4sIxdrCeAIyTXdnKHdYQnqGKHtyQbZZ6bU' },
  },
  {
    name: 'demo-wallet-243',
    address: 'agoric1e4p09g2kgnndamxsad9tj9uhd2kmzgd2amhw0y',
    pubkey: { key: 'AoIzwJxqmgJV9tBjBGi+AyC+8itbc44WRO1YBpCRdvKa' },
  },
  {
    name: 'demo-wallet-244',
    address: 'agoric1atvl5jc65vap6037dkcucqtn8h5ak28dgk3j6x',
    pubkey: { key: 'AsyecCvHe+6kdMck8cjA8h9C+9ORdFnlspl/PNExVw+E' },
  },
  {
    name: 'demo-wallet-245',
    address: 'agoric1vzme3f58w935wtl6mjmt38n8m0lhhjxqydrm30',
    pubkey: { key: 'A1A7AdPHCMibrIzhKdsVO5DVhfQ3QYI+seWqaouFHZSW' },
  },
  {
    name: 'demo-wallet-246',
    address: 'agoric139p04ueqe4whj7eujqfr80pkd3t8pcez687cky',
    pubkey: { key: 'AymyqT52CWvBJ807vScm0mTLTKSlR09ZExMmaHrX9SUv' },
  },
  {
    name: 'demo-wallet-247',
    address: 'agoric1uuxxd2k64u79kllvsw4zkr3udckvctalqr36vc',
    pubkey: { key: 'At8GsNObzOpwkcQiDPmBYr4Nou8+abwFxY2ZqYKcDsgD' },
  },
  {
    name: 'demo-wallet-248',
    address: 'agoric1jfmcvxzfn8w5wd5phxmecvj99zgcht3rzse96e',
    pubkey: { key: 'AxEtlwyShCEWm/UQtuMB21UMpaRhTjFH8VIxCnMtb6cZ' },
  },
  {
    name: 'demo-wallet-249',
    address: 'agoric1mmrx64ckz4s3v0f2vvj4666nlhpgwzpzzrmkh8',
    pubkey: { key: 'Axzltu1Hj/W+ZUGS+tScsfnUvBogICoSzeR5MEvhPGov' },
  },
  {
    name: 'demo-wallet-25',
    address: 'agoric1ek62exe5w2t8g4g0lh05m5362e3qg7lstzzs28',
    pubkey: { key: 'A31Hy3kPxtjHOTn6yoZi/P86giPtPxwqIgDi+Bzea6Oz' },
  },
  {
    name: 'demo-wallet-250',
    address: 'agoric1v8mds59x8qpdgy77mmgvejcfyxdgxlfggkrjl2',
    pubkey: { key: 'Avx87klElxYx//sv5hz6Am5b6a7kpthMx1faoo1nyIx0' },
  },
  {
    name: 'demo-wallet-251',
    address: 'agoric1f7w9gxfxzvlxumm8368gxv8aq22sdq8cfdrrgy',
    pubkey: { key: 'AgEaNfDgpQOnJRrLRjUMUvIoxxL366ozuvHAWFaXEeAc' },
  },
  {
    name: 'demo-wallet-252',
    address: 'agoric1a93wkygwgjykq4fqcj2hls0vgzutk64eg8wgjp',
    pubkey: { key: 'A3HtrXuZqWGmCOYPdiKjAzuA1tZRImBH5ra0UeMyMxJP' },
  },
  {
    name: 'demo-wallet-253',
    address: 'agoric1e28x3kx7wzxrf4a66rsqw6lrccdmzs4psrqzhh',
    pubkey: { key: 'AtfQ8/Z6+ZbaXCCRj9LJMWiyx2cE9kZZJ+3Wgezs0CvN' },
  },
  {
    name: 'demo-wallet-254',
    address: 'agoric1qqxd4guah0ce5e270emcne5xvvazpdnwr26e73',
    pubkey: { key: 'A8TE8edGnKu33y3z3BKo/SH5/XoOAwSVnwoII8vG3yR2' },
  },
  {
    name: 'demo-wallet-255',
    address: 'agoric1qtzrv9ym848w0e2gxfhm5pmqukm4ccpa4fl4ts',
    pubkey: { key: 'A4BtgCwvTUHWyvuAe87h9WAwkbKI7JMEc+cqhdFR96ew' },
  },
  {
    name: 'demo-wallet-256',
    address: 'agoric1dch4jnf06rt4nhyfhp99ghexyun4mx9eqype7p',
    pubkey: { key: 'A3ygA67SaTKecmTuB3gVuaXpsb1rFhOrncYGn4/QlsWd' },
  },
  {
    name: 'demo-wallet-257',
    address: 'agoric1hkeglzue6meyf2m25qsym4xfynlhc9hls8qm2q',
    pubkey: { key: 'AvRibNfEG3cJbmr0W73jYuuueXMCDVRhNSdjC25kmTu+' },
  },
  {
    name: 'demo-wallet-258',
    address: 'agoric1pguf6hw6ufckdxgc60pzk5dyvk7330fgec8gkl',
    pubkey: { key: 'AutVxEVP/BcGk5+IZagWEYDV6YlIpRXoVPufLbU41gxl' },
  },
  {
    name: 'demo-wallet-259',
    address: 'agoric1vrmugp6atljgqn747xx4emk527a54je4ly3m93',
    pubkey: { key: 'AunDOjm19kqYZz13D7kjV2mtFaCqTHMhTCuLVmi8Wvx/' },
  },
  {
    name: 'demo-wallet-26',
    address: 'agoric1eh47fkuynuyshdyse7aq7ehaslv2tf2cwgxxjp',
    pubkey: { key: 'A8fR3ujsKRizxNu9tSOy6W20bEViQ44AHAPJ8m1nB+t+' },
  },
  {
    name: 'demo-wallet-260',
    address: 'agoric1wyejgk7lmr964puv6gjgn9l448338hfhkstj8s',
    pubkey: { key: 'AjtJq804mAxAvgo+kLQqd+Czc11FyrJ2LcNozrvePmER' },
  },
  {
    name: 'demo-wallet-261',
    address: 'agoric14mxyc4mluqw5tmzk5qzz8qrk2vmfd4rldpp4vm',
    pubkey: { key: 'Ao7JApH2YILj/yFC3Pq8bDJDGm2topohtOpsOkFudCEs' },
  },
  {
    name: 'demo-wallet-262',
    address: 'agoric1lq0rzyuqfftnfkacn092gsujpzauhujdtvmuar',
    pubkey: { key: 'ArARWcU2rLelzqqpOfDdaE78cLG8p2SU9St1plTXUPtW' },
  },
  {
    name: 'demo-wallet-263',
    address: 'agoric144ehqm5tjld2vfxuys5napgg2qm5hl00gunptr',
    pubkey: { key: 'AnPyXYfSi8sDaW1AZ8IXuI4l+fxhihWmsS3S0asjTHGy' },
  },
  {
    name: 'demo-wallet-264',
    address: 'agoric100gsfhtv4r39v8cp8jcgtt2dzm5e4g3drcsk7e',
    pubkey: { key: 'AqnyKOc0YwHW8BadG5gMzWrPhvIAtJVFq8ev7fPLqWCW' },
  },
  {
    name: 'demo-wallet-265',
    address: 'agoric18uudh0c83p22esvtv6qfmq70fdvh67k0ane4h7',
    pubkey: { key: 'AyELCh8MDd0vUpHaZOQTedm14+AJ6WuLAbfF/9FY+fPD' },
  },
  {
    name: 'demo-wallet-266',
    address: 'agoric1tlcgzehqw0e50tlxu5s97g40cakyrdp4qqec7k',
    pubkey: { key: 'AwgScX8lMhj4XA/nJydxY9k1A1f2VIMi+dp+nCu0H/es' },
  },
  {
    name: 'demo-wallet-267',
    address: 'agoric19rkp09mlw2p3ygdw6zqzuxjhv2pw7uedw9xg72',
    pubkey: { key: 'A9gGvNvshvyaWJz0hrtF4xrGdDemZt5HaDLELerOH34K' },
  },
  {
    name: 'demo-wallet-268',
    address: 'agoric1cxe68x664q90fkx84xw625zhn8fn2r0y5qfznv',
    pubkey: { key: 'AikVPcVZTA0tiUE85pMyExwScUDKSTvwxnV4BmIDaYAF' },
  },
  {
    name: 'demo-wallet-269',
    address: 'agoric1nr9e0qtyhm8scj43422dnjq2pwr5uku49rrxfg',
    pubkey: { key: 'Apy4mWye5BjbffkNLYrBYxDuAPnZDUTIDEeGPcQfti2w' },
  },
  {
    name: 'demo-wallet-27',
    address: 'agoric1shax8mdf2ceenjwyxwmllzxyf3jghavkr8gkgl',
    pubkey: { key: 'AhWwcq/Fzi6q+XCOhlx44zPGHj2W9Qt5Wy2AT7HIV/Sk' },
  },
  {
    name: 'demo-wallet-270',
    address: 'agoric1sta976njjqw345xhpxcja3evwqfwekyr9dn7ra',
    pubkey: { key: 'AvGEC7wpGm0qQv7siD+4qWapsxpqWUTXw230Oa3esIWH' },
  },
  {
    name: 'demo-wallet-271',
    address: 'agoric1myr8acwxttzdu2d3ma8ed3hw0hfgy58kh3m6hc',
    pubkey: { key: 'AkRfUXnLXLLgW7K7v91txNp6LzkpHpF6Cb6kIOcQ+a+k' },
  },
  {
    name: 'demo-wallet-272',
    address: 'agoric1e7g38j52t3prgnv8uje7j6d0yz02w35p723tvj',
    pubkey: { key: 'ArYKsEYpK9z1yLNHlXZmtW/EDb5YdcJX/wvZjDbbZLfx' },
  },
  {
    name: 'demo-wallet-273',
    address: 'agoric1qktyf7fll9ch395upkkg5z5atft5fyj2kt08ts',
    pubkey: { key: 'AioDA8CHLzKSwwgs7LCTPgKcnj87p4h3wDgmQHwtUn2p' },
  },
  {
    name: 'demo-wallet-274',
    address: 'agoric107s9r0puh7yc7twgme7528xq6fqp5xkj3r5k5k',
    pubkey: { key: 'A3tJ8zWXNhkYnkDMGHotLNQqSdpUEDLV99HL7DYPeAb5' },
  },
  {
    name: 'demo-wallet-275',
    address: 'agoric1262mtx97a8a2pjlr53n0z02u3mazyd9mptnd30',
    pubkey: { key: 'A1a5Y+aFUw7iBWOtC/B9d9UEwHBsuIusbeLdtN/FfEul' },
  },
  {
    name: 'demo-wallet-276',
    address: 'agoric1gxnl6kg8v60svf06haknv5z0hmm74ez0mr3dhg',
    pubkey: { key: 'A9L4Wn/9hyodR4cYmYlCY2pYq39UIQUVgBOc/Sz9qRBi' },
  },
  {
    name: 'demo-wallet-277',
    address: 'agoric1tdku536nxwlngznllc4r2nya4df9kpxeh9pta2',
    pubkey: { key: 'AiZsBjOPkaZGjMsNWEYGy0J4yGkNdQ9i7gUQJC21GD52' },
  },
  {
    name: 'demo-wallet-278',
    address: 'agoric1psw99srmhjfjukej9ua8qmuhcmltmwxqh9hwm9',
    pubkey: { key: 'A5P1vivaCyOQa08N+cjzZkiPvBdcalD8tGgWoVrmYaaY' },
  },
  {
    name: 'demo-wallet-279',
    address: 'agoric1xdq3vpyljuh9awaxpkvhxeenaxgvsful4t7pg7',
    pubkey: { key: 'AteQ/8OTRtj2DpjORuVMAFh6/ynH+DGximzauajn51fQ' },
  },
  {
    name: 'demo-wallet-28',
    address: 'agoric1ax0wd8l02730h2extkxkfur8z3f37339telmf8',
    pubkey: { key: 'A9zhRj/b1HMkzZacYg0wCD9xMNIgG9RjvIXAYeLw5E1m' },
  },
  {
    name: 'demo-wallet-280',
    address: 'agoric1zqu2wams54spquw5qdczn6wmxk8w426v8ws0l5',
    pubkey: { key: 'AkF6hRNMiKUGnUIPPVvpwxK3D7ryPd6EO5FmxMxHwNP2' },
  },
  {
    name: 'demo-wallet-281',
    address: 'agoric16g7dx4dua8zd3y380nd07eda7wdh7hq5q0vhal',
    pubkey: { key: 'AsZ0D7YbU2ThrU5H0pvgflLpnHxDEV5maVtCMGPALBJE' },
  },
  {
    name: 'demo-wallet-282',
    address: 'agoric1x8dtye4uj5wscsmn7ypn77sef9hf37jdxuuxd0',
    pubkey: { key: 'AkTgy/Kjl17J56KPctLLSfBh+u0wkTNYl8JzIX3bm7+o' },
  },
  {
    name: 'demo-wallet-283',
    address: 'agoric1095tc6u757f00ktdapw99w6uceaxk62myee6ev',
    pubkey: { key: 'A3PSIM8yNbjUcacvwgQdFe05UdyD4WXff/rHHP0q+rj/' },
  },
  {
    name: 'demo-wallet-284',
    address: 'agoric1h5su4djyaffha7hpd3f73smekpwu2ja5kuzp2n',
    pubkey: { key: 'AuyMxAiTwYCkRumfv+gUTsUcQF2roqY2wk6W2VCbRutM' },
  },
  {
    name: 'demo-wallet-285',
    address: 'agoric1tcu80ytjeve6q5d7hcrg5hlenept6ta25a7y3w',
    pubkey: { key: 'AnJagP7ADIxnNkBoaZTu7aC2x+hiR88O3n7QOhw8ImCC' },
  },
  {
    name: 'demo-wallet-286',
    address: 'agoric1srpdueqqex6wymynxc663tdn43rf67jxucuwh5',
    pubkey: { key: 'AjITDECyBHsWW+eDw08tpyqMH1YTKXy7YT8+OuKPScpU' },
  },
  {
    name: 'demo-wallet-287',
    address: 'agoric1lun80gqyay9sddgwlree2pktmuneky8ks4ncqh',
    pubkey: { key: 'A8gC6ht/KlurI9eTdFWxNxUhuZ2XffhpnHVvNJ87W1Vi' },
  },
  {
    name: 'demo-wallet-288',
    address: 'agoric1ak4ddc6vrhfsezv3s6h3e0gc9m4qcpwcwuxq4e',
    pubkey: { key: 'AkZwwrjkNuHzHOxw8j6tg7y1t7rygDWt4rnrNtH4gtOu' },
  },
  {
    name: 'demo-wallet-289',
    address: 'agoric1mu67x0pyxsevckm9e8cqknf6krgkqrkr4jfnlx',
    pubkey: { key: 'A/Nm45asDfdI4c0U24dIhdUWljqQ86L8mWvdb+ubKmM1' },
  },
  {
    name: 'demo-wallet-29',
    address: 'agoric1npze02fjxjzmgumm6jc5kcdl3e3wqvr20rmc28',
    pubkey: { key: 'AmbXvtaR1E2SP1WaL57o4bB2McmL98C4j+QlSO9A789R' },
  },
  {
    name: 'demo-wallet-290',
    address: 'agoric1q0w3ryxtdxye9cpfrawxrnjk5sw0zdzdzkxlac',
    pubkey: { key: 'Air+DCcwkRh6DubxEpzIO95sBmbroZfmsXapjnpyP5Cp' },
  },
  {
    name: 'demo-wallet-291',
    address: 'agoric182jk9fpvcgn2lw3dquj0xy2k5lkach2mwhkmly',
    pubkey: { key: 'A4VnUqvHxloPb1nNIDcWIDQiLFD3yHrGesYCr0Xzqp8x' },
  },
  {
    name: 'demo-wallet-292',
    address: 'agoric1kzp8qyzzshn6fkw2apg4fwdt3f2sz3kj6fs2fw',
    pubkey: { key: 'AjrtNgbcsTO0Lv4J7n1EcR8V0ILTOsOCtJhdDmJzDFJM' },
  },
  {
    name: 'demo-wallet-293',
    address: 'agoric175dzepn5a2kqcrpmeznjzjesfwxatw6ltr3d73',
    pubkey: { key: 'Aq2JR4nuOqIB1d5R0xz015vf9Nszg/uVkjX5p4dbKq0A' },
  },
  {
    name: 'demo-wallet-294',
    address: 'agoric1qg7ze3vfrzjsdy2ec3n2psvpfd0r0thpx24cpp',
    pubkey: { key: 'A2BdhrhhbyA3DTyyyNAdsrtnD/61sla6uUCcxpLXCW0l' },
  },
  {
    name: 'demo-wallet-295',
    address: 'agoric1ezpy4ymxjvey4n66k3q4ygs9z5z2h9f5kuq74m',
    pubkey: { key: 'AroaRcMbCI/eTT2Sb3X2/utl0CRMKvK2lWbl8PTQ2wfL' },
  },
  {
    name: 'demo-wallet-296',
    address: 'agoric10z5j8jw8gfqk84zsgq0nj5zutz65jw966whlv6',
    pubkey: { key: 'A/7Wzkm2w+I8+P3si3rek6M1Xc+rlUZ734sKD7fABTvF' },
  },
  {
    name: 'demo-wallet-297',
    address: 'agoric19ksrelzn4vxt3au886p94x6za5z8lr80rln62z',
    pubkey: { key: 'A3pmHLmI068GpKQGcfnG180/ndewUgTXyups7I5nhTON' },
  },
  {
    name: 'demo-wallet-298',
    address: 'agoric1mh7hhuyvu9jqhttgy9vsd7uce0fct64twal4fw',
    pubkey: { key: 'AmxXXTO/xmxY0M/nZoQhneIHKvSAZgHN9kEClFp8VZuO' },
  },
  {
    name: 'demo-wallet-299',
    address: 'agoric12xnmcwvnm0led7274j5wt28t565duxun73egy5',
    pubkey: { key: 'AvjZBtWlDfDEqSEv7PjKD2QUgk7E45haZ4ieyVA8jtbw' },
  },
  {
    name: 'demo-wallet-3',
    address: 'agoric1plp30pk0ljlexg735vacqlg4psftj7648ufcrz',
    pubkey: { key: 'Apr1LzzkrpJCUBmeH5rfLp4eDZyHd39qiGK2qoo1uZ4y' },
  },
  {
    name: 'demo-wallet-30',
    address: 'agoric1clld8lvekpcqxv5fnjmvhv03h86js8uuryl6fl',
    pubkey: { key: 'AxIKcZlUMtYRJACfXlXN1Q0TzLcMjAQs6nbvh5vtDNVa' },
  },
  {
    name: 'demo-wallet-300',
    address: 'agoric1thmxc4wpm7aqrn5wu7syxkgpg9k5hjxjpwc8hq',
    pubkey: { key: 'A9NHeVpAQZzGpSHoZSG6sPRTcInrEqCrgDvoL/CtpN7R' },
  },
  {
    name: 'demo-wallet-301',
    address: 'agoric1g7sk36qeh4fax2kypvenqgl90m4llfzmgttkgd',
    pubkey: { key: 'A2qoA16TeyHQvdih3TDEeaxt2oZU54cNktqLigv5v1sA' },
  },
  {
    name: 'demo-wallet-302',
    address: 'agoric17y6vzrl4ct6s7svzys3jygdrnhkky4lt3kyfjz',
    pubkey: { key: 'A728t/q164BjLtGr8u1gqYUrqh0jrnX1Pi6RmAAKgsNS' },
  },
  {
    name: 'demo-wallet-303',
    address: 'agoric1nuktaat48qt2pjgmwju430zs7xhcegu8j8tfgl',
    pubkey: { key: 'Aput3DPmT3fgdK8EVcf9yuwoUmy5txQbtcUaxj46aNvQ' },
  },
  {
    name: 'demo-wallet-304',
    address: 'agoric12uysjyve2qmx0skl9tzwk6h4nggxjywz6e89ev',
    pubkey: { key: 'ApVf9Sm6NMTOg4sZO/yr3h83QRs5dg9DG101ICiomHZq' },
  },
  {
    name: 'demo-wallet-305',
    address: 'agoric14qd3qsepusdl2q879uuujk53jmwn8694jkrklk',
    pubkey: { key: 'AsRRA/5p6ps0YabduVOpU8026vmm4UUxpxKBEFFKxDPC' },
  },
  {
    name: 'demo-wallet-306',
    address: 'agoric1s9g3p85q6pczjj46pr89ae26k6pdvm9a75hmcd',
    pubkey: { key: 'A9eXZqvMfBw2zknUZXxokIu/aPQufY7NdlHpYo3T5q5s' },
  },
  {
    name: 'demo-wallet-307',
    address: 'agoric15hvrz5kdlfw0vkeu62dahtatg4jzdfey4asxf6',
    pubkey: { key: 'AkUuW8slmoCnBSIc7LJL6oyI3vZ8gLvAOXRIMD0pypb+' },
  },
  {
    name: 'demo-wallet-308',
    address: 'agoric1rq3dmzt7833nwr0gpasx0wwvchm8t2e0flm39x',
    pubkey: { key: 'AoMWQKcDp6riUys/+C1KqE2/k7SnXLrBM9BqS6QNvVtc' },
  },
  {
    name: 'demo-wallet-309',
    address: 'agoric1xlt2vvld5p4r6vsmc0akwframrdj27tygeyan8',
    pubkey: { key: 'A3HHKaBVGFykD7nIdd9LBgpACJbMkJX3vlTkb+nmvhmn' },
  },
  {
    name: 'demo-wallet-31',
    address: 'agoric1ry4la3gnfyw3rrfeq05j24au0zaeztlg9f3ttz',
    pubkey: { key: 'A7EThKYrU+A31iX+CJdCAWCZj+F5rLBJSiRYTpeFAFMM' },
  },
  {
    name: 'demo-wallet-310',
    address: 'agoric17qh8d552zl298gss50p7y5ggpp94spwktwh8m0',
    pubkey: { key: 'A5uVzeOQKCkFyEekfXfBlcwHhIZIMzXsCKucp8XJIELy' },
  },
  {
    name: 'demo-wallet-311',
    address: 'agoric1xf898t4w0nwgas2zatuf9qs8kfny886088p4x2',
    pubkey: { key: 'AuMYQSTeokntKRf/46vI8of7Hq7czVWxTXCmRtjUC82q' },
  },
  {
    name: 'demo-wallet-312',
    address: 'agoric1c4frt7mj2ra4mv73gqaecmtzu4h7jnk99m4ujk',
    pubkey: { key: 'ArMyI52O2hbI/OgPlBOn3qeQQJbSa37N5WyRQeJhJ5Xa' },
  },
  {
    name: 'demo-wallet-313',
    address: 'agoric1wm3ngw0ukpzaz675wnd0l8ayf8q738rg78dra7',
    pubkey: { key: 'A5WEr2xoBsmYC1mZU89N6G4DZ4lEi3Ala2Xc0dubx4aZ' },
  },
  {
    name: 'demo-wallet-314',
    address: 'agoric1669qcan3r7mp9jz7m2s36c0v2c3adhumhmukac',
    pubkey: { key: 'AvgFQq5VvQFozYoY1eEw/L1sALCubCyI2rjCKdAkaHd4' },
  },
  {
    name: 'demo-wallet-315',
    address: 'agoric143d8t9syqls2w7h7vt6m8v59wry8893f8ftk7m',
    pubkey: { key: 'A6+uWoolwtj2EafZZEVAbkFbIA6yazgvVJpKBVq9vH67' },
  },
  {
    name: 'demo-wallet-316',
    address: 'agoric1kar76qewurd8w9wvggl66symqzt4ywrpwd2zmt',
    pubkey: { key: 'As9MLXfPA3lYJ5t1luo34DgMO0rHxkgEbvuaLHC+MN1Y' },
  },
  {
    name: 'demo-wallet-317',
    address: 'agoric1tmn0x48mk39u5pvtuydqseuc5daju0vf9yhps0',
    pubkey: { key: 'A6H5g9CTPUs2OJGhgu/l9nJtaSWyVauTS9QMY1mey9d3' },
  },
  {
    name: 'demo-wallet-318',
    address: 'agoric1j9hpc2lyp8msslfjmgwzm7ps6zrwh6thu56u0n',
    pubkey: { key: 'AshmRtU6dhkoNj8BKUfYkUCfv7PTky/Y5k3nV19bnPim' },
  },
  {
    name: 'demo-wallet-319',
    address: 'agoric15r35t6jhgh97qcrzfxstscfspxhx04psft2jnf',
    pubkey: { key: 'A5TUSuIP5ySwP6pMAsMmjgRtmScXnUV/aoKzMloztNP+' },
  },
  {
    name: 'demo-wallet-32',
    address: 'agoric14f0xm86hjxar0avk5ytl7phq67yvxudku5jwmg',
    pubkey: { key: 'A2qtxexhgzxvQLneQh9ezxVc7CjPlagdjkyu13Kvwb8q' },
  },
  {
    name: 'demo-wallet-320',
    address: 'agoric1c3pyaqygpdg8tnuzfukjtj30rgyfzsvvatslnd',
    pubkey: { key: 'AqUje4EInMFqYmkoNZgii4Eo2I+KIH0bPjBR9BZnG3Hz' },
  },
  {
    name: 'demo-wallet-321',
    address: 'agoric1yym757cn37730nycgcnzqvaxgtamztztyjvnpa',
    pubkey: { key: 'AlAYeTCbdDu3tbwNXkRBf4sjR5jBaG+sXVg3X3eQoUDP' },
  },
  {
    name: 'demo-wallet-322',
    address: 'agoric12dxj746ve2jqt4vhcmz5h4h4uhgs6pp72g2xsh',
    pubkey: { key: 'AoImLyoyhSOP7Y2ntvYY1uwELUSd0Lp9BWBfy0IevDWW' },
  },
  {
    name: 'demo-wallet-323',
    address: 'agoric1ktj0y7258vdzjr4lddap40np7s80464r8jy499',
    pubkey: { key: 'Az2Ho1cahGvGMA7Hi3xTgYdPADo0uJTQE3bN+YqaHPbG' },
  },
  {
    name: 'demo-wallet-324',
    address: 'agoric1y7eexrsmr5z5mfyv8vs8usctzp2kess2smga05',
    pubkey: { key: 'AkVhHCyi4FOCU4mcrk6H9ir1UVSi8bdqQcyLvju39tvI' },
  },
  {
    name: 'demo-wallet-325',
    address: 'agoric1sc2z78rd589wxqmgm95uq57vjcrwrmdtu67hsp',
    pubkey: { key: 'AzaRLEl1G/uL6XMb29EgaWxOqGLu814wjOm49NHYF0bG' },
  },
  {
    name: 'demo-wallet-326',
    address: 'agoric1vt900jt0hrjzy5p9s2pj5zen2t00geyu7ax4al',
    pubkey: { key: 'ApxT3WLjmc4j4VnxiwvwktSapLuHaQmbl9qO85lOflR+' },
  },
  {
    name: 'demo-wallet-327',
    address: 'agoric1ymhu90slvtnjruygqdnpjn48wsqu35khjqnkda',
    pubkey: { key: 'ApTxlMFVShpAxXjlngbWCVMrZZnaNUxBqk30BZNCX/fm' },
  },
  {
    name: 'demo-wallet-328',
    address: 'agoric17up8tm6yy2nw45reqkmvvkcr4uryp50ehsyl0g',
    pubkey: { key: 'Au0unNfpXmFl5juoVuwMhmX0amdPLGTK0p9aXqUyK/Hl' },
  },
  {
    name: 'demo-wallet-329',
    address: 'agoric1cl4kalwwafch835edttca242w9kafyds3u8wmr',
    pubkey: { key: 'AmUNxuibKr+a8dhy1FU2qyDkjLpI2+G40TeSFh7nDeB6' },
  },
  {
    name: 'demo-wallet-33',
    address: 'agoric1gqu3qqaxlmg9fjlfpd6s0kurvre97xrpxsk5e4',
    pubkey: { key: 'A6+ab7CA5ggIF1BZJI4kGlXimqdefb7oC4soomeEhzWz' },
  },
  {
    name: 'demo-wallet-330',
    address: 'agoric1nrn7st6y0qr6wsx2mhjkl50kcq6rp6yqefteme',
    pubkey: { key: 'AsBqQvNOZqgTnQixVfaOg/m+4CmBEi90NCCO9CoKYFAG' },
  },
  {
    name: 'demo-wallet-331',
    address: 'agoric1wh4drfcvu65qt63hu3xqj7e5u3frrvcc9ru4z9',
    pubkey: { key: 'AkVub+H+q9p1ZEH/4/HQW1jrwmoqFF+6crWpE14bu20m' },
  },
  {
    name: 'demo-wallet-332',
    address: 'agoric13ma3qwkkt0zpjngsppyyha8qxl3x8msm80fnpf',
    pubkey: { key: 'AuUJh8ukIfnBwbIbJXufPKpjZvTUhBi0KtLsnTY3iWkf' },
  },
  {
    name: 'demo-wallet-333',
    address: 'agoric1nyzzuarg8cdwn8e4agquzjxkrjkejwvus75qdq',
    pubkey: { key: 'Agf31rNKsip/2n1nHWTPTnERa0w8rZN9JbfpoZunwgOT' },
  },
  {
    name: 'demo-wallet-334',
    address: 'agoric12hya7akg3jrljfe498ushqcxvu4rm4snmr3udk',
    pubkey: { key: 'Az902+5foY17qzy39auX5L2vERtRIsIy9jLBqNxU6wm7' },
  },
  {
    name: 'demo-wallet-335',
    address: 'agoric1r9fg4dfvg4x7w32kh2ardwtwv8p7222kvu5lnx',
    pubkey: { key: 'Ax+YJi2mleRhQMDFFs1qWIyVU49NdC9hQTuiPBUQwSGh' },
  },
  {
    name: 'demo-wallet-336',
    address: 'agoric1v2q66z8k39wsyjefs4tte8makkz7542xxa3amj',
    pubkey: { key: 'A0unh48B86vmoMYZYFIT9cvJfQdthwoaA0kjmlJx/M/V' },
  },
  {
    name: 'demo-wallet-337',
    address: 'agoric1k88w3klq50fk6wl4sxyp7ldy2408leu7twxqrk',
    pubkey: { key: 'A5Hn66F9VkKBY50RaueG4Oif48/KNzP3xPwZslHQt6t/' },
  },
  {
    name: 'demo-wallet-338',
    address: 'agoric108cmjkeymutdttg6d2c22cj83c8s673dk6w6zz',
    pubkey: { key: 'AqszdJovM6TY6msNnoGaRcObUe6YxuDPf/KSl9xR53m6' },
  },
  {
    name: 'demo-wallet-339',
    address: 'agoric1geqc0sl3dleuy6cnw0yauxj8alpk70kkjyvw7t',
    pubkey: { key: 'A9OM8xhaZroAZW8G+2wD+W7mWXzJKqzcgKxu8EOQ+wBh' },
  },
  {
    name: 'demo-wallet-34',
    address: 'agoric1t0hcvfkwwkmf4ew6zfz76t4ep4vpash7d7tn98',
    pubkey: { key: 'A4diO9YX399ED+1PnMxoLPrWGMerNpy/n5CDWuCKSwB4' },
  },
  {
    name: 'demo-wallet-340',
    address: 'agoric1xw8u0gh3783da2knpy2sztaz4sz2n9rjr3xp29',
    pubkey: { key: 'AlQ9hoDAJzKxtZ0F6Bh1yqLEt0uIXFdyZc8ItS+jPrsx' },
  },
  {
    name: 'demo-wallet-341',
    address: 'agoric10wzr29lsac0j650878rhp9m5w7revfw30xcn0s',
    pubkey: { key: 'AiXYHyc6AENs3jTjvDsqlbPArXdyH4CInJT3liIXOyCs' },
  },
  {
    name: 'demo-wallet-342',
    address: 'agoric1fsg3ejv8jrv6ta4a2agrkazzw27uvcxkwwvhp0',
    pubkey: { key: 'AlrPQ1EuHWU2WR7yziHi0PUkBJxwOJy45176xp2/QeeP' },
  },
  {
    name: 'demo-wallet-343',
    address: 'agoric1wlvrfpjqcc3argtkavwg2c5l7jv8jv4dyedgh6',
    pubkey: { key: 'A0n9Ubypb8cKFJ159pqiwtE+WDdwTZKFfzVRXp+W05U/' },
  },
  {
    name: 'demo-wallet-344',
    address: 'agoric1t6q9cthg2euzezfqa57jf9e8zmqtuclxchy738',
    pubkey: { key: 'A8pxAYAThT598YOmQ+4kvsSOeLQv6GefBwNA4QZMgkSG' },
  },
  {
    name: 'demo-wallet-345',
    address: 'agoric1hmjrtz5sr34rgpnt6xq7f4vkqhfy7fwgw7p73h',
    pubkey: { key: 'AoiVOA7tbozJxjDAh5QQQWj/06cjSImxjonJo8w9xIE4' },
  },
  {
    name: 'demo-wallet-346',
    address: 'agoric1s9m2s98enqdl2p2cnqpdc54tlcuqgdafn0mru8',
    pubkey: { key: 'AmFcgAm7sA5E0LVNq6tDl7Lngly4vZCNIxjth0898S9h' },
  },
  {
    name: 'demo-wallet-347',
    address: 'agoric1c99609wvpmv9df8uv5nd50xax2t3l7wk6mumcc',
    pubkey: { key: 'AxdcviU23TDbnKuJ9XymvdJ1LAsePCAeXhn0wEof04PA' },
  },
  {
    name: 'demo-wallet-348',
    address: 'agoric1vrslx7wa0lgmqnkckymhflphjlkxht40qzr793',
    pubkey: { key: 'Atz/4dZeiwJ/dFjkkDA2UVFxYfH8wVGX9cRF0Oas25ek' },
  },
  {
    name: 'demo-wallet-349',
    address: 'agoric1gu750yvzf4cz8jr9cppu0ln5029sfx37sg300k',
    pubkey: { key: 'At+yk6kz9B7aDqGT6HKmHaOnpkldtvh3IJ4k6Fex9af7' },
  },
  {
    name: 'demo-wallet-35',
    address: 'agoric19450rpzmy4azte3dm7avsuzjstt8q7tlcgtqv6',
    pubkey: { key: 'A9+oyR+jKLG3OhGE2pJJtQfxiKAtdoQSArt2Jisr/9UL' },
  },
  {
    name: 'demo-wallet-36',
    address: 'agoric1qhhuhzjlfka24mj5qn2u8nqj6tshltrhnkr9wy',
    pubkey: { key: 'Ak6Tu3sDPVywEnsE/TT9s6V+LaLf7nnMq3uY3xhzZABQ' },
  },
  {
    name: 'demo-wallet-37',
    address: 'agoric1hk5rqnjt0vzqgwtagvzzpdplsl5yleurz4qlfg',
    pubkey: { key: 'AxcK/kbLhi+j5Hjy9QizUYdFebNA/fYSjHfL+e0HTMIX' },
  },
  {
    name: 'demo-wallet-38',
    address: 'agoric1nyrmvtchvnd6k2c656u2exngnhttxvf9zpj85t',
    pubkey: { key: 'An3547f8SFnISfo5Q306r00xKEeXlRzf9aE3X0/6whSa' },
  },
  {
    name: 'demo-wallet-39',
    address: 'agoric1c2qq7pfkxlm4j40zz2ws2epj9g0z6qgytmx77z',
    pubkey: { key: 'ApoJ8b6XAhaYzB9YLvRXcjurqbLdrxK0+iEClQIM5KPR' },
  },
  {
    name: 'demo-wallet-4',
    address: 'agoric1kn75hfdz58cphf4qpu6r6008mtx5555dh663xz',
    pubkey: { key: 'Asb0hlDSr/dXYdwQFpB2rb7vx5GzuilugHbEf/dAHf5b' },
  },
  {
    name: 'demo-wallet-40',
    address: 'agoric10n6eksfsx36ehegxz3na067ucvvtfux5q2apls',
    pubkey: { key: 'A6LFLv9gt4qkgpMC+VdqpxBHrR2U1jLDzq467xgY2rU/' },
  },
  {
    name: 'demo-wallet-41',
    address: 'agoric1qmg0rkraad26h5v3evmzfjdash6h2w3j6eac6a',
    pubkey: { key: 'A70XGRZy4X/UH4nFWpUs1ZRrVd3auoA4858wqOvPjsLO' },
  },
  {
    name: 'demo-wallet-42',
    address: 'agoric14sgc58dnjctagplykzepxdx8fnkm800fknjhsu',
    pubkey: { key: 'Atp/ZfUL/U4y6QvpjWtAsLU7YK0f0emH7vs+oV3sEIOb' },
  },
  {
    name: 'demo-wallet-43',
    address: 'agoric1ka5gm2lkpnpwz06t2wazxd486qjzgq0787cuj5',
    pubkey: { key: 'A4P+WxYHk/G2PAQIjXwY4iavfchbwuYHtJhIGQU8N/0q' },
  },
  {
    name: 'demo-wallet-44',
    address: 'agoric1ujw3hav4vydu2egfck6svctr8a94nhdkzdt4tz',
    pubkey: { key: 'AqjGvX6uhxh0oV+dC0M6vnOmdQFObtOcI/WYSMolVNcK' },
  },
  {
    name: 'demo-wallet-45',
    address: 'agoric1422364w33de246549gf74d9kp29hx6dt7tela0',
    pubkey: { key: 'AnF8bBY5lKTJ+UmfqW9Pxch3SJITAls9sR/AJuwC30bU' },
  },
  {
    name: 'demo-wallet-46',
    address: 'agoric10k7wyr6r473pul0s89d0kyytcusvltdljzmlwf',
    pubkey: { key: 'A5P69lRa6c5SezD5hvMtvkVwXdN2tlqJlturGAJ5MfQl' },
  },
  {
    name: 'demo-wallet-47',
    address: 'agoric1ynwfusdvfvuw9pqk7agzxvyqnzulfawqxuhtsh',
    pubkey: { key: 'A1Lrg91Vb52bXoP+3xzr2zTxMOCx/KcyVnG6HWQGht6I' },
  },
  {
    name: 'demo-wallet-48',
    address: 'agoric1hvc6xglxvfgs29v64umqwnqsuv65gj5nncx6vh',
    pubkey: { key: 'AxOiKRgFYLXenxMZUHVXjcq0os0wM7CC0jaYAr22pXCH' },
  },
  {
    name: 'demo-wallet-49',
    address: 'agoric1h873qm9hvk863mst60qy2h644qzkjmyklex205',
    pubkey: { key: 'AxczC16wjqQfwsHFFq1s9Qutj/XgcnxLmzPjRDwitodu' },
  },
  {
    name: 'demo-wallet-5',
    address: 'agoric152vkdluph97u38vtzde74393mesvasnlv2lq5n',
    pubkey: { key: 'AusNQxHfZQXEWI5tuX/YHpyVNbPq0UCaWWDUGleYKFj6' },
  },
  {
    name: 'demo-wallet-50',
    address: 'agoric1nks4sntt80pyshgcftux7kszytfezcuyk450yc',
    pubkey: { key: 'A4AcyuH1d6iRQWxWxsdJRn5/Q+kvqr4V5B/TlXhtFWV5' },
  },
  {
    name: 'demo-wallet-51',
    address: 'agoric1ml3pqxentaj7hskuyjyjx7f57xgpvdeepze3ul',
    pubkey: { key: 'A3Toak/bv3UZ5+M5t34gd/FE1xCF5OeF1WI87eLX0fMY' },
  },
  {
    name: 'demo-wallet-52',
    address: 'agoric1c76fsdrvcezdagah057d80ukjpmzhvenupqraq',
    pubkey: { key: 'Aor8h6OaJ7wkn2Pp8ae7/016EuS2gSEeeiwP04y9korp' },
  },
  {
    name: 'demo-wallet-53',
    address: 'agoric1s725lv3g0vq9n4yfua2rdy2349cfvhlts0gqdm',
    pubkey: { key: 'Aj7nswxjN7ZsUxJDvLVewQY8mPVlYOv/WbaHfQZXR+nT' },
  },
  {
    name: 'demo-wallet-54',
    address: 'agoric18x024n7cqrdnsz8y5zx8vptkdkzw9a9qhx775r',
    pubkey: { key: 'Amye2mdywRarHYCIovgZK/3pp0IEY0c9TAuvwclolikr' },
  },
  {
    name: 'demo-wallet-55',
    address: 'agoric1hesxhhuzejelgcw46g7n8d5j5k36rfc8fkmf7j',
    pubkey: { key: 'AltAobceZ0XEEUVP20xYkvvzC/l+5VHGtBOw1LJX4XfN' },
  },
  {
    name: 'demo-wallet-56',
    address: 'agoric1qw6l7hhwp9ukv2g9xznczrneh7jq9je4rew26h',
    pubkey: { key: 'AsE2X8IVv5O1G7TXfZBPO4QMykV+deieLowEPlKShkQ6' },
  },
  {
    name: 'demo-wallet-57',
    address: 'agoric1zq4cjhcqha3cw6jq8mmxt7rp38ypc5fan0fry7',
    pubkey: { key: 'A9rMENbJa9U8Cf5vAfAoXpzsijrFSiysuCU8YdTnlQ5n' },
  },
  {
    name: 'demo-wallet-58',
    address: 'agoric1w625906wrn6ghsqjpr0e96m9f4yqaxfyjzux03',
    pubkey: { key: 'ApC6lL0zL5pWuHPN3dvtCi/3c1nNKVanzvtlgDCWcdFq' },
  },
  {
    name: 'demo-wallet-59',
    address: 'agoric1f0a2h2yrjytuwau72346dg2kzev2cay7csd5s0',
    pubkey: { key: 'Aq+aSoYuDj/pNk7NGVGgjOGEjOJZSG9pNCIr/nnJdRS1' },
  },
  {
    name: 'demo-wallet-6',
    address: 'agoric1jtt7wfp02xejg8ydg4rjfymswmgrk6p8lslrqk',
    pubkey: { key: 'AhxmE9Q24mevnDOeYrlfYfdxpD5QUD00W1UqfdM1q3a8' },
  },
  {
    name: 'demo-wallet-60',
    address: 'agoric1hl0kdnjprtgpjxp7tnlw0pca3eta4hnv94kgn4',
    pubkey: { key: 'A1Qxv+RLoTzd2V4TS7e8omIudxYpS+RP/jOhYUknCmum' },
  },
  {
    name: 'demo-wallet-61',
    address: 'agoric16209wej54rn87qs6fjtnwncaj30hpz8whxvzx9',
    pubkey: { key: 'AtHYNj9F5Szi3vLXSt2Lb5hSLiC3P3hSU6g4dOJt1eDT' },
  },
  {
    name: 'demo-wallet-62',
    address: 'agoric1q37vfxsepuc226r32rc0pu3nvt5rxxjqna0gtg',
    pubkey: { key: 'Aw1QTKT37mfxdrCD80lMZyzw6HCHVPdz4d0CphGmSCX/' },
  },
  {
    name: 'demo-wallet-63',
    address: 'agoric16uxxcl67hmk93f6q4uhwuhqfm0e5zhj9jkanez',
    pubkey: { key: 'A7eJ68YbyILzNippFZeTUUvhFsbpoNylsKvt6Or0gHKB' },
  },
  {
    name: 'demo-wallet-64',
    address: 'agoric1vh87pfwkgwpduf7ljja0dx0xhg3rs9w5fe4dy7',
    pubkey: { key: 'A7bcAzPJ0zMd6ZV7+lZz4mAj3CHGheYAZeRi386yOJ/X' },
  },
  {
    name: 'demo-wallet-65',
    address: 'agoric1paarh82yd84glqetnqncm6ux3cutu833hgah47',
    pubkey: { key: 'Ao9DFh+XnFNLllYQRlRZ1EildFeePtt9hqYNsZ0N9/9T' },
  },
  {
    name: 'demo-wallet-66',
    address: 'agoric1tefudeqvjxu6xlj0t8e37gv8j0dm90jnch8f66',
    pubkey: { key: 'AijMdJKJjN9nv347rQ7/VdIq68yNMsWp2twVzOo9ypkw' },
  },
  {
    name: 'demo-wallet-67',
    address: 'agoric1g8zyde8g506hagc2mwqutjklnelhtxcqx6yde5',
    pubkey: { key: 'AtLRp56FdxxCErocfVYzpinYohr+SNu98GWBeBwDBcQe' },
  },
  {
    name: 'demo-wallet-68',
    address: 'agoric127majamlfgw7w40lhnavkvaf3rvh2ke2pm3k0j',
    pubkey: { key: 'AuVrhLjfh19Lf93R9+RXd0pLFU/W3DQmt4uB6lGoenCF' },
  },
  {
    name: 'demo-wallet-69',
    address: 'agoric1jxhs298eaj8vjem50za6nzcedcy7kl6s2jcdvx',
    pubkey: { key: 'AxOqZvKikDDoGQHroqUcFj8RKYoU5HLAIk5x48tz8kko' },
  },
  {
    name: 'demo-wallet-7',
    address: 'agoric1ypsylp9ulqdx3kxw62002mp4axae52lq3x60y7',
    pubkey: { key: 'A/6akHh9HBiMcrsF11BJX0+PEhV02i084NK+rhpwz38N' },
  },
  {
    name: 'demo-wallet-70',
    address: 'agoric152a9wjx8kqvucy6r54w4ln2ks0uyzyn2v7dy0h',
    pubkey: { key: 'At3lHB3sixYBjQWxQV6+DPjhkCpaewmBTaBeWuxfx6fV' },
  },
  {
    name: 'demo-wallet-71',
    address: 'agoric1y0ku0u8uazarx5hg6ckkkdjqu4uug3ndpqn2f2',
    pubkey: { key: 'AhJoveMwh2WemNIMiCMmBe9aPM4WkuBOvR5R643ObKb8' },
  },
  {
    name: 'demo-wallet-72',
    address: 'agoric1658zup5z4fypuzytty8sazy3jx6cjxcwrratvg',
    pubkey: { key: 'AhRTa57thI6208rDo+C6lQb+6XAhPOoTK5RpJbqgoGrn' },
  },
  {
    name: 'demo-wallet-73',
    address: 'agoric1ycv3w5sdjl3dpe0sppuutpmhst8cacrwwexv5t',
    pubkey: { key: 'A3PWWSsqQta8f/7gMNBo1KpynwLNMXa3uT16kFZQ/Gu+' },
  },
  {
    name: 'demo-wallet-74',
    address: 'agoric14ldca93hazduvd03det43g9utlwg6ecwzk6482',
    pubkey: { key: 'AtZspAGAOr4kVvfGVQETMmVgFte0bWHPqGP6YkJas7qr' },
  },
  {
    name: 'demo-wallet-75',
    address: 'agoric1jlyq9mm7kltzn69ttgfsw69na79vtshv95c342',
    pubkey: { key: 'AySdid/S0rG215SWyTQkS5bnfgfJHcHPlfk3+OougPEZ' },
  },
  {
    name: 'demo-wallet-76',
    address: 'agoric1hppyg04ajx3343lf7spdty5j5g6x3wyh4527se',
    pubkey: { key: 'ArJLnloYhJCKiCaa78KQ+r5ElxuzHLAecp41R56TA7BE' },
  },
  {
    name: 'demo-wallet-77',
    address: 'agoric1wqf8prfsw4qqpx5vjfvuzl7tmc0pl7f3ftcfsm',
    pubkey: { key: 'AnwNuTjM/CY6OSbBsJOjZtSkCQs8L6cH9AI9jfxbKzDh' },
  },
  {
    name: 'demo-wallet-78',
    address: 'agoric1n2y2nfmqyz2nsfwzk0y7d09jl9dzjyyhr4mlxk',
    pubkey: { key: 'A6M3n8RoUbxmCePv8H8udaQ4voixbzVujUauKDnjaQXt' },
  },
  {
    name: 'demo-wallet-79',
    address: 'agoric1w52wd9e4a6tn25cnjfrzcly52rjrknah2vme9u',
    pubkey: { key: 'Aj5cyiPAxs19lsTOI0ob7QsVdVDIoWIgnhaB2aor4rNL' },
  },
  {
    name: 'demo-wallet-8',
    address: 'agoric147nmlg3gyyuumhyq6x6f2ztz3jx3pa5ezz7cdx',
    pubkey: { key: 'Ax/RcUw1Vd9veI7yo4NbQltWs8TUzzf5vOFBjwQ4C972' },
  },
  {
    name: 'demo-wallet-80',
    address: 'agoric130eq7t50429t5vrw8f06nc702cfadpl9kxu3m6',
    pubkey: { key: 'A8F8+JpeMn9VrXzXx3kbytpwceRfQA/ClnQE48cxOp/W' },
  },
  {
    name: 'demo-wallet-81',
    address: 'agoric1frsc4z8u0smpsjprse3vc5lt0kdptvr4h3c4ne',
    pubkey: { key: 'AhsHLOaMw1LIQpjzgL1Ti3EYCump/OjlPECUNNIxuY7D' },
  },
  {
    name: 'demo-wallet-82',
    address: 'agoric14cl5y6td8e4ny2azdc670dma9yxn6jjtee69d7',
    pubkey: { key: 'AyJUyL1VsingdtbGlaGOVR3FZaLAqLgKp6E8QlefX4Kv' },
  },
  {
    name: 'demo-wallet-83',
    address: 'agoric1xva8xxktff9y3m7scydsnkkdn8nvwkvqwcjtwz',
    pubkey: { key: 'AkXg9z0e02+vmX/oSrGD2CCPL5+86obco0/b4M1juXN5' },
  },
  {
    name: 'demo-wallet-84',
    address: 'agoric18warjvmcwpz737z6stla55f4dqkvkhnhuy0w8d',
    pubkey: { key: 'Ai1ceE60NKEM1t6E/F9So6QRlKytGDLEJrj53okZI522' },
  },
  {
    name: 'demo-wallet-85',
    address: 'agoric1u4ucs3gzm7vehrusw00hzcfff87cymgs3yptdj',
    pubkey: { key: 'ArwYvGxOty077CnIuOJve0yBXYRt3WcUAPute3uXZ0yO' },
  },
  {
    name: 'demo-wallet-86',
    address: 'agoric1890qkvpas07gz0zwcyftnjg37ec085pkrmj3gp',
    pubkey: { key: 'AjfLgSK2GEYoJpvlNWvah8sOr2jgKeupnjjKFFkD21AT' },
  },
  {
    name: 'demo-wallet-87',
    address: 'agoric1ylsrrzuk62jt6lc6g9wrf65a7cm6z75yf3ukgv',
    pubkey: { key: 'A0I/FUvzpG56IiEn512eJuF2oJZxJrifgF/T6icWU2vY' },
  },
  {
    name: 'demo-wallet-88',
    address: 'agoric19zet8e83ht33ptgvg0520cec46y4zw9eh2j5xz',
    pubkey: { key: 'A7hPyyrKWkoswdB6papbADEO+S3ye5/GUCmLWZ/Jsg4V' },
  },
  {
    name: 'demo-wallet-89',
    address: 'agoric1c5vmny3dqdp6epnst0g93cjf8z06ptkeryy377',
    pubkey: { key: 'AzeQsUxfgaRqhRiNwHZAwaV1IZ8cfEZ4psAlSozcUJTq' },
  },
  {
    name: 'demo-wallet-9',
    address: 'agoric1zde3l64fy9h62yv4tlks2vv98mnup2668n864k',
    pubkey: { key: 'A+hjf6lXOBWSFtgsCaQmZ7Y9OMoV7RC3lNTWh671NOtG' },
  },
  {
    name: 'demo-wallet-90',
    address: 'agoric1smyfda4rsnmps9huqadrmvtemg4u5hnqfzevlj',
    pubkey: { key: 'AhHsIV1SmLj6koM1wPTBoB0+OKSXM0FZc05/CJq+adds' },
  },
  {
    name: 'demo-wallet-91',
    address: 'agoric1rrctewxwjch8rzpm3hgvuxveqy6zu9wfcnlxa9',
    pubkey: { key: 'A+JxfQDF36PGA0JeeS0cUmMbjH+y5cApmzQZz8dpVOSV' },
  },
  {
    name: 'demo-wallet-92',
    address: 'agoric1n0k7y959yynpd70hgjrmacnurxshyf6xe0w45j',
    pubkey: { key: 'A6zVd6Tda8xOQgQSewPQzmySuVgHSNOSYXn+xVNVl7ex' },
  },
  {
    name: 'demo-wallet-93',
    address: 'agoric1gffm3eet596q9sgznnhw3uepw3vamg45a7yhxs',
    pubkey: { key: 'A8F0HefIa2YK/rBpBzRfVktBGMkeE5S8aEn+MD6A1iiw' },
  },
  {
    name: 'demo-wallet-94',
    address: 'agoric1mxea7842lus379jh8g4gjxtuftllk4dqqtjn6h',
    pubkey: { key: 'AgnFxWwYwSy8m0EvByMtZv+Oh3erRCyB7E8Fa1FlabgT' },
  },
  {
    name: 'demo-wallet-95',
    address: 'agoric1ls92lpss8jpah584n3aaq2gh44hfpjxx0yvv7z',
    pubkey: { key: 'Agqqiph67EtlLeWRVyoqcf/WRFNcpcS/y2oW2vST9smv' },
  },
  {
    name: 'demo-wallet-96',
    address: 'agoric14x0r7tgdef5ra9jkfysjcxz568exkcfgz3vpnj',
    pubkey: { key: 'A+x0X1VGa8Jom6ZGAxum3amfSmQ1Dp2Zf0ufDG/8lSuL' },
  },
  {
    name: 'demo-wallet-97',
    address: 'agoric1zrn0r9jm6yupflr36k4hydfefdwk7clctux422',
    pubkey: { key: 'Ap7Jeqdvph+BUcgn0jrOJVBnV4HuUikV4UiB9t56cw5l' },
  },
  {
    name: 'demo-wallet-98',
    address: 'agoric1t4nf8wyg7x7cv28zwn0xtucd5s5qvyhc6vvxf3',
    pubkey: { key: 'A/D7NQgaK4+7+TqaQ46Wspl/yTpwQ3upw2l800dia9gN' },
  },
  {
    name: 'demo-wallet-99',
    address: 'agoric1weguys427mtj6tz96klnrs747csxn7y296t67n',
    pubkey: { key: 'AiB8fw2scL61uqgUMjXZbcDxmsj2g/4Mpxy9nW/7e0yr' },
  },
  {
    name: 'f',
    address: 'agoric1kc0upctlzzuhz6zg3veh690t9w4wpn0r3efgny',
    pubkey: { key: 'AjgHcA5PDK4Evamo8gB86WVUPcYHPSFcLyR6HKxS4m12' },
  },
  {
    name: 'gov1',
    address: 'agoric16xcmskq9jpaydkefthlmhe2lg8gc6r8use6dah',
    pubkey: { key: 'A9pHwL1qd7E2bau0tAZAbgO5I3jqnZD1wyBXQEsJc+ju' },
  },
  {
    name: 'gov2',
    address: 'agoric1823gt66c342gdul7d76ndzryv0sfremvlzu69x',
    pubkey: { key: 'A0JiuNCBG43RybA6r6caHvnfKP2pXEg4L6HVoOtq9hlS' },
  },
  {
    name: 'gov3',
    address: 'agoric14x8ktzwu52f4u9vzq5xawnv5jtys2epszmql4t',
    pubkey: { key: 'Ah7JFD78ManC3PiseCiUttTbbsWMHU/ALXSQ1ArA9cB9' },
  },
  {
    name: 'tester11',
    address: 'agoric14gr7nwgqlzhwvslfq6902j96prtetl24rh0z6z',
    pubkey: { key: 'Ah6+vBQIsgKHe4wqvjgKmUK4m0hnsa5+rreFDtOokGj9' },
  },
  {
    name: 'wallet-1731277116-1',
    address: 'agoric19265cz9jkld4gnndrqqt2fvexwtt2xzan00zrl',
    pubkey: { key: 'AnEGbxH55aKu/9zIbgVDV2qXC43bpIqtZdHTKV8BAM58' },
  },
  {
    name: 'wallet-1731277116-10',
    address: 'agoric13g79zexugr7c6xr0zutv0jshkq30hawv363aej',
    pubkey: { key: 'AsbgPBHCEYc3haCltruUi1tWFiF/kOVfdIncKx/7JTvW' },
  },
  {
    name: 'wallet-1731277116-100',
    address: 'agoric1kmzxfncr4tk3uwysaylsz000qawwmngs25a62d',
    pubkey: { key: 'Aqt7lMy9Pz7qhflIj9n7r1alp4dZAfZWdkL93Y91sJzI' },
  },
  {
    name: 'wallet-1731277116-1000',
    address: 'agoric10lx445mp7e6n6zdj07uvyke2csphl6mk3cs9zz',
    pubkey: { key: 'AwqvWSi7sbf/3b+VhjkxWWjRIso8MiFOyhIh3sSbAsjF' },
  },
  {
    name: 'wallet-1731277116-101',
    address: 'agoric1j6tcm987l3denve74avvsxg9f00qt9j0vt6jq4',
    pubkey: { key: 'AgIGNTWR65UwJ4HXWoBeGxtAYOzT4iKoC+2/LkoHu/hE' },
  },
  {
    name: 'wallet-1731277116-102',
    address: 'agoric1fhcnv9h5kmeutldg30nvg7cflmgs0j48ph5f4k',
    pubkey: { key: 'A54OTP9gON0NGbP0T3DTrDmTZFqhkepTtKtC8LyYQI0R' },
  },
  {
    name: 'wallet-1731277116-103',
    address: 'agoric1jsve5yvm747s5lcwj06agvajj50nqmu4eal0cw',
    pubkey: { key: 'Avcy4949iM9eUQCV9tfbzTGNcIcKHn5BHT79G6zRXY0s' },
  },
  {
    name: 'wallet-1731277116-104',
    address: 'agoric1nwnwlfnp0rrqkqsm6ez7607c7zh6zqws8xvsk6',
    pubkey: { key: 'AubY+CshgSoIyHcjW4blwsTUfKcnuCKWuwcVi6bIgndq' },
  },
  {
    name: 'wallet-1731277116-105',
    address: 'agoric12e2q42766mhrr70mftgy40zh6ly6m7txd5mqy6',
    pubkey: { key: 'Ak7UcXs6145suOT/wUdQYZ3nwH0KhAqwC7qYjx2IDfrg' },
  },
  {
    name: 'wallet-1731277116-106',
    address: 'agoric1eggvn65ncgyrf7ulute3qnfn66082cdk83rusd',
    pubkey: { key: 'A4gjw2DbSHQuru4u5H8vMi9VY/t5WhAFY6MP3YRg3kUp' },
  },
  {
    name: 'wallet-1731277116-107',
    address: 'agoric17dz3e40yda6nrfxtnn6z36uesehfexch9g0m9v',
    pubkey: { key: 'AsGafE68M/jPhioJDAabk7ZIJx9GxBI7NEX4b8shJSOK' },
  },
  {
    name: 'wallet-1731277116-108',
    address: 'agoric1gzkpa9rr9cmr0fucd24v43xkvhpspq7ukn3yw7',
    pubkey: { key: 'AmjoRMbBMxEd44yF1VjgI3XKjXqWC/VyjKIFYDevHra7' },
  },
  {
    name: 'wallet-1731277116-109',
    address: 'agoric15n503tqsk93z58yw73kflphryqwa0fflpewzjn',
    pubkey: { key: 'A1Kmw3uVQHeVjda1JNXJeCsejhYPfZE2nxJH2dtf4Ehj' },
  },
  {
    name: 'wallet-1731277116-11',
    address: 'agoric1qjqe6qpsccc2mndg72l0w4snhmgdhp5djvsn8f',
    pubkey: { key: 'A1lBApRSW/pjkSoi94a6pASihcgC952pKiDmw8PCmHVU' },
  },
  {
    name: 'wallet-1731277116-110',
    address: 'agoric1k5cc0ptapkma3qmdluaz6r2rg0cx27stpxuvay',
    pubkey: { key: 'AhaLYM5JHXGuoztwMuFz6K0K/tkrp7PelFx2Ig18Vd3T' },
  },
  {
    name: 'wallet-1731277116-111',
    address: 'agoric172597xtsm7qw67tzm044u0zklexzapvwzrkp5w',
    pubkey: { key: 'A1YBj3lwf4fVdrm+4MsBLBV7D/xGlhu7e5g8sStq927V' },
  },
  {
    name: 'wallet-1731277116-112',
    address: 'agoric1cecrw6gfsx63vyjy33wt374ydxcjddk096dxrz',
    pubkey: { key: 'An8eULmlLFjfYVg/LtAgdohWLMHSKXYh+1LVdi8F5CWt' },
  },
  {
    name: 'wallet-1731277116-113',
    address: 'agoric1nvvnmkhqh54jtnx5t77remmww3h6afys6tpag4',
    pubkey: { key: 'AxTG2ucRa/RW0pFQM9lszUV7f4IQquZUuE6kqNp+H5Ow' },
  },
  {
    name: 'wallet-1731277116-114',
    address: 'agoric1n57txld9q4mxw245nf7w3c9dhuhjcdaucpljd0',
    pubkey: { key: 'AhNOZ7zFLSiT2J/ywT4HgOUdgxaovjDim6ZtKEH0QY0L' },
  },
  {
    name: 'wallet-1731277116-115',
    address: 'agoric160ld88rqlm8fee74a6a0nqfev5ljs84q9xl4sh',
    pubkey: { key: 'A0Wf9WV9k00ms4aYWINUw49zxo+d/8fhTrLzRAIRg0Ar' },
  },
  {
    name: 'wallet-1731277116-116',
    address: 'agoric1dkawph74cygg47r5z3eflfwsqr97yrrmulkuky',
    pubkey: { key: 'AuICG7oFvDmVGZDviqMM1DU8mSoMZ72yqaCbj9EWd1d1' },
  },
  {
    name: 'wallet-1731277116-117',
    address: 'agoric1twc9tep46nuv4w50jml23u7u55fm0l70yg5ydg',
    pubkey: { key: 'AujqcJ2Kb75oQLikrxWOatZgniTTp+J3KfNS3LZQUeeX' },
  },
  {
    name: 'wallet-1731277116-118',
    address: 'agoric1qnhys6e3kvq6pnnkymvrugaxvrm3uzwwe83s8q',
    pubkey: { key: 'AjcsMS/iHjThfeFwEDHzhxr/bKTXVTS2I4sH5AA/YZ7n' },
  },
  {
    name: 'wallet-1731277116-119',
    address: 'agoric1uns8ncq6r9fwkad3qdq5dgttau38qma3xgudjp',
    pubkey: { key: 'Arj1sdBu8A0lh3RLrhR30abOVk+rshythTYz6UgiEGSP' },
  },
  {
    name: 'wallet-1731277116-12',
    address: 'agoric1l5cyvac9d8p27q2ud4a4rc2msd3yd7a4vnnqr2',
    pubkey: { key: 'Ax9Tybq6UPIHBabQ+Yn0ZXwlSfCkoNa0Xn1QFspQuJQs' },
  },
  {
    name: 'wallet-1731277116-120',
    address: 'agoric14ttxfzne6dem2fcqqhajm7htmmtlx2pp8a8fc0',
    pubkey: { key: 'AipN32+SaAwtImEwc0xeqVPnMHfy/4PAK+XoZBaC8jXl' },
  },
  {
    name: 'wallet-1731277116-121',
    address: 'agoric13kaek2sj244xj0nq5lfr5kvy8c0y60kzdu8dg4',
    pubkey: { key: 'ApWfr/tnbfG2qjpvVQQst9+xZOdjZB7+CJz2VbIjDXYQ' },
  },
  {
    name: 'wallet-1731277116-122',
    address: 'agoric1tkf2lp87v4lmt6ftahr8d37d3atvhjn5tde0xz',
    pubkey: { key: 'A88t05InK55dKnovBanUX7se1FssJp7FSO7wDmorBTEz' },
  },
  {
    name: 'wallet-1731277116-123',
    address: 'agoric1eqg9gfvua5qscjypuqwyw4f0acacyt603rtpd4',
    pubkey: { key: 'An9C9YHbDcXQxELauhv27/IwTU8XRSA/IlUxtMS3ayUj' },
  },
  {
    name: 'wallet-1731277116-124',
    address: 'agoric189qyf38ltkg6agvxx4d4a056r73rcm70yacgr0',
    pubkey: { key: 'AnRXcU5gXl9brksH9rdrrpiai8J2gie33Kdyt0nm5yIv' },
  },
  {
    name: 'wallet-1731277116-125',
    address: 'agoric1xu4u48g3yta8huauz9xact6e9zu8ej6696t8l3',
    pubkey: { key: 'AtbOiuBeTHpcRLfpyWJI84CpR68w1kh7VL+Lx2vemHYQ' },
  },
  {
    name: 'wallet-1731277116-126',
    address: 'agoric1jktg7lj8cqal2lfjpnnzcr5waqz0fen6jg8k4c',
    pubkey: { key: 'At+/wOnPub7mzBynfHBzNdiZorNSVmMRQvR/VZ8a0Ehh' },
  },
  {
    name: 'wallet-1731277116-127',
    address: 'agoric1x7cve63wstejeez97z2lzr0ldt3yv8j0q4hwv4',
    pubkey: { key: 'AreZ0t801oCpZU4hLJStsDUbqe55C0DELsPibUlRw6yY' },
  },
  {
    name: 'wallet-1731277116-128',
    address: 'agoric1w0jfuvpxq3fyck7kl0k7qq2gc0s8hshanm2026',
    pubkey: { key: 'A/vcaX2mqfig8xL2/f3EhjH1e40l7L5n+7iw69sTsSmE' },
  },
  {
    name: 'wallet-1731277116-129',
    address: 'agoric1p3xzvtnazywkljrcyv7yp4yqsardxpx4lma5tz',
    pubkey: { key: 'AgPtfFmnWbXwCyeGT9ZeCKQcwdrSrcKWvszJ6KH8h/Hk' },
  },
  {
    name: 'wallet-1731277116-13',
    address: 'agoric1n3w8f05ra0y0ruy6aa8su08tfd39hpwpsmzqee',
    pubkey: { key: 'A8kNldATTV7PmWfjcP8xq242VPK8ZLhGGYlVw+RW5cl3' },
  },
  {
    name: 'wallet-1731277116-130',
    address: 'agoric186p9p3jufvmxqg9hvg6n0n6j7g689h2w20wv7d',
    pubkey: { key: 'A5JsklLRIBhL3uVZP4uBdTonAOOfAN6gX1yQsNpCEXTw' },
  },
  {
    name: 'wallet-1731277116-131',
    address: 'agoric1rgt7eaarqerj0jsav76rzlmyc44aluazeycdzl',
    pubkey: { key: 'AqR6+mOPu9pgOfUlA1Z8bAeSBlu1812lbztURKVYYIgs' },
  },
  {
    name: 'wallet-1731277116-132',
    address: 'agoric1c8aypa5j4d6theu82k9qpa0tyeq6d6pr4l2wjn',
    pubkey: { key: 'AsWWvL+pUKNl2lOoat3Zh9pO7GrS8zR9qgAw28Zj2t0V' },
  },
  {
    name: 'wallet-1731277116-133',
    address: 'agoric1wrc9gvjh2e6hrt8sw48ft7nkunwm7pzmren20t',
    pubkey: { key: 'AtIrhrav+3jCYFiZqy+Cj5wC2lDqcYPDTdyTkb1Ti7Ni' },
  },
  {
    name: 'wallet-1731277116-134',
    address: 'agoric13zeyywadad6vt79pj9x7v6uvtd9xvwqmuf32jf',
    pubkey: { key: 'AtP3Hid0ZxyPOouXqLwOZPdFcXONqNvRJLJzgGi58ZQr' },
  },
  {
    name: 'wallet-1731277116-135',
    address: 'agoric17lgm6vj72m5caqx97g3q4xlydyf05ualpzzrwa',
    pubkey: { key: 'AisC/5/xyWaGyABbxNDxOcEm/6lnALeLjAxl5ohNHxBC' },
  },
  {
    name: 'wallet-1731277116-136',
    address: 'agoric1wln6rdvanm6e2f7g86hs8ea5e9gpgsgxq5l7un',
    pubkey: { key: 'ArsYTh44vI07j7PLm5XObrsFdlDTHj1v7z1mI+aRhV3l' },
  },
  {
    name: 'wallet-1731277116-137',
    address: 'agoric1mlrtjjawletq6myr2x6ymhftlglx700adlzncr',
    pubkey: { key: 'AomkpEG8oTKEqjJqimpKlZecwnhCTki5q8FVpuMBHDwu' },
  },
  {
    name: 'wallet-1731277116-138',
    address: 'agoric1klk4hwtrecmq899tdr6shng66d0j2dfscxe08a',
    pubkey: { key: 'A4vrDeAiHNtQ2/bBT9HOgvq/qTwNE1IFDXN3uoCeks2Y' },
  },
  {
    name: 'wallet-1731277116-139',
    address: 'agoric18ujry9ahpr5erzr9j60299q85q3e6yy7jd6m6e',
    pubkey: { key: 'A/7CmE+1YAqxIlULW6fOp4S+eg5u3llZbJrW8CN7PNIv' },
  },
  {
    name: 'wallet-1731277116-14',
    address: 'agoric1glvzdn7950r5m7j2ynjv2ur29rl24mvsmdurg8',
    pubkey: { key: 'AlVOXQfB8PXvGfy3ROtVWJYLJTV6MkVNg4Fg/qTW7AyK' },
  },
  {
    name: 'wallet-1731277116-140',
    address: 'agoric1xwf4qfsu2ne57l2enr5qq6f9ur3g7w8pkfavcp',
    pubkey: { key: 'Az48POlGMgZBpktOGwVJfXiKvbFespLT1yi7c1NAbhIA' },
  },
  {
    name: 'wallet-1731277116-141',
    address: 'agoric1j7z4uw0g3adrmq2t0q4h3qvda9az2yxjrnwlut',
    pubkey: { key: 'AgiUzJln/DBAynpiwm4yz/3wiZXVX8IawTrw+pcdSTz2' },
  },
  {
    name: 'wallet-1731277116-142',
    address: 'agoric16tjqvp4s6skuszzq69tq2tukvs97a7676rejr2',
    pubkey: { key: 'AiVfenUcvcW+v1+2b83R98UQiQ3pXkJ1VDOHkRMZ1dl1' },
  },
  {
    name: 'wallet-1731277116-143',
    address: 'agoric1y8w75zlpwhur8698gpqeh33wpe82z5etc08yrn',
    pubkey: { key: 'AyFmRDr1QlKYDJi+DYVOg4VPPODJ3SLvn8iCjqhlzEAp' },
  },
  {
    name: 'wallet-1731277116-144',
    address: 'agoric1nz986vru4hgnf6cp5j39yskl0z4xewjc58qcns',
    pubkey: { key: 'Anj5fPs+I6c6JtCm6lrmSaoud1MaFUd0mCzLndGbFeVX' },
  },
  {
    name: 'wallet-1731277116-145',
    address: 'agoric1e5u0v0je3p4j8zs2685h44kt5vn5x8mjegvdks',
    pubkey: { key: 'Ag5TGACdhB3NJh2StUjRG5BqN3XQeNutk8Hy14aqtQzg' },
  },
  {
    name: 'wallet-1731277116-146',
    address: 'agoric1gds9u520dve8vrzrtjfdq04vvlltflaqqk8ynw',
    pubkey: { key: 'ArpQHZmG7YD9f5SfTFaLu80i+GksyuO8LvBL8U/4Cw+e' },
  },
  {
    name: 'wallet-1731277116-147',
    address: 'agoric1e80jh3ynkuxgshzp4x2rj2k2dq26h5kza90tx4',
    pubkey: { key: 'AjbQAbxauFBa7VVSRIwmoY9dunqBTLxOdG9Vcb1dryuU' },
  },
  {
    name: 'wallet-1731277116-148',
    address: 'agoric190yv6j5n7ttguuzwlv2g0wtcyta2wkvel5l66j',
    pubkey: { key: 'Ano3VlG04TrkNg5DS3uDCcTRJN+SKkW6kZ6c8cmSbcCy' },
  },
  {
    name: 'wallet-1731277116-149',
    address: 'agoric1ar22mqmt7mke3qpzjrxyxscvr5a7k0xp3ng4c6',
    pubkey: { key: 'AupZizxeS4pf4blRf01rMk2ADETIPVXQyEEGKy9uwDpy' },
  },
  {
    name: 'wallet-1731277116-15',
    address: 'agoric13f27km4ats0ddt09hlnz62qwhwuglvy585aumy',
    pubkey: { key: 'A12neOEkOrWlakYmfu0KKvsyF5FBzSTZC03XHKJtJf1L' },
  },
  {
    name: 'wallet-1731277116-150',
    address: 'agoric1uj0t9qmqu7q97efepfmdgh35j5tny7vfsg3p6m',
    pubkey: { key: 'A1iudX79jmCJTVW5KN4gBMYUZ0IOYwNPZ5KTHXB8rMXr' },
  },
  {
    name: 'wallet-1731277116-151',
    address: 'agoric1x30y7g23657ateu7ygenktu0evvvru27w022e2',
    pubkey: { key: 'A6oI7hNlaA4ELr5x1foK+7PO0lSereh4Xxa0N8TFVFjH' },
  },
  {
    name: 'wallet-1731277116-152',
    address: 'agoric1tur2djpwxzu7qvk8pl5zu9xydgakzk2gzzcade',
    pubkey: { key: 'A/joGGh5y+jnZGvEBeV8pzj7RCs+/Jc+wt/0x8WC0tPy' },
  },
  {
    name: 'wallet-1731277116-153',
    address: 'agoric1wdkhwtyqlvsnpqc6tkfpw495cjrnvc4w3ffd0u',
    pubkey: { key: 'Ag2doMMeh2Rck5yH5m2pFzGOyf+yYhywu/5Ica4mra2T' },
  },
  {
    name: 'wallet-1731277116-154',
    address: 'agoric1zem0vy6ej2csqqwa3n55nsvth36vv50rradfgy',
    pubkey: { key: 'AquKu9NwGGK1ncAIZBIEvR+HmtcXuOWgV4/NJQthH+gg' },
  },
  {
    name: 'wallet-1731277116-155',
    address: 'agoric13w75hud8w7vt3c23akvqqw958lncznx8a50y7m',
    pubkey: { key: 'AoxaSECQszSfNfxvBJSRi4zrCAhoRsNZGFDfzy0rlskV' },
  },
  {
    name: 'wallet-1731277116-156',
    address: 'agoric1nmc677qtpkjss6q2pghsjumd5l3atngyjfdhhx',
    pubkey: { key: 'A0IYqP/KBVkfPq2/aH7OPLXjueMSqQN1O3ofVJFkKbt7' },
  },
  {
    name: 'wallet-1731277116-157',
    address: 'agoric1gzufrhfwmzesgmt3a78dqp3nyrea5e076xxz28',
    pubkey: { key: 'Aks/SHDTgUu43c1ho260kBTTq57gU2PY+KF83V1xnzus' },
  },
  {
    name: 'wallet-1731277116-158',
    address: 'agoric10jlj9jsxx20z78ekj8j8xv7qjpcf0yewkjwn67',
    pubkey: { key: 'ApCUtdghDwjp1s8hXKbM7frp3sVBlrZN3bWqWTLRRfgg' },
  },
  {
    name: 'wallet-1731277116-159',
    address: 'agoric1jj5ph4fk3slu9ff8em9nuydj9wk34cg723sq0n',
    pubkey: { key: 'AnIWN+1D5Haz847QoG9ypSSdOPGyMo37fiC0CqulP8bQ' },
  },
  {
    name: 'wallet-1731277116-16',
    address: 'agoric1gj4adjt653d6hnww0755wzarhnmdfsasp7ee0s',
    pubkey: { key: 'A/6BuDnISiorZDL4k6GPAQ+O0+PAXi+HX9DCuJSX7vo3' },
  },
  {
    name: 'wallet-1731277116-160',
    address: 'agoric1w4pwyaazac263gx3p9lh5vz76f64am8afs7ysu',
    pubkey: { key: 'Apllgf4ZptxXnhcJQgVeHMjGHLSgTYQ31b4we1wdvh/F' },
  },
  {
    name: 'wallet-1731277116-161',
    address: 'agoric1txtxrxyj8lw962ghjeqrvvu92ts9yk4sqp7fp2',
    pubkey: { key: 'AhMhDMC2RqO28JzMtcO1j6ClcCz7Qy/HbkoaNzMp566p' },
  },
  {
    name: 'wallet-1731277116-162',
    address: 'agoric1rll3wxupxzvtzzkhn5gwef6lhpmmpc4fxesvtt',
    pubkey: { key: 'AgtxGcln+BltflVF/8K2DpADIbSEZ7aAb0Sx5Au1YENl' },
  },
  {
    name: 'wallet-1731277116-163',
    address: 'agoric1pmqhgu3ljc099kuj72dplp90sx6ffphjs6n8ak',
    pubkey: { key: 'AjPk84KaLgG0OJzIqszwUkq/A6EvyaIU15iOnhJuU290' },
  },
  {
    name: 'wallet-1731277116-164',
    address: 'agoric13ejddexg5tnrpjqda0vvwkuvvqjety66x5lxew',
    pubkey: { key: 'A8y/CMkDTcD8ndHJMALWzc2kjFASFzmQvOQRDMKCva3s' },
  },
  {
    name: 'wallet-1731277116-165',
    address: 'agoric1lrz00lgkxlfcnnsxvsq80uzjww4cuc05x6jdw5',
    pubkey: { key: 'A7y3fZyuwV24trUPsp1k2DpK0Tys56TFbE8RTdiCJ8za' },
  },
  {
    name: 'wallet-1731277116-166',
    address: 'agoric1a57qunthvuqgutsdd2a6n5wq3h8y7lt9yk6qsj',
    pubkey: { key: 'AuAEA7gonZURgN3rs/sWu40A7brp5dx54z4kS5W8wPbW' },
  },
  {
    name: 'wallet-1731277116-167',
    address: 'agoric19j7r4w3402k79a5guaenylnkla378429zvpf3f',
    pubkey: { key: 'Ag3tsaHgmcx9z3pO2sdS2u7r5pP3XZdq8KhRW9W2MehZ' },
  },
  {
    name: 'wallet-1731277116-168',
    address: 'agoric152a83960h7ktkpvd4mg8dzhn8qqurh7pjqasdc',
    pubkey: { key: 'A3YfmpmjZ+5qMvz5KOVWANgin4eHXnYn9rWuEucF2LmU' },
  },
  {
    name: 'wallet-1731277116-169',
    address: 'agoric1dfzenyyhas43vmmkmmr9nxq5tvupzu6yye4ljl',
    pubkey: { key: 'A4nWV/89qJJK28A5KHxnJpfxIJKdrby+jCE2zENErWsz' },
  },
  {
    name: 'wallet-1731277116-17',
    address: 'agoric1v4l4z4pd4wxz74xg4ezffjgq3qlu7xz63s7j3p',
    pubkey: { key: 'AwoqLWc/WzJCWYfQwbU1Y6flRf3A9EAr+zes6LoitA2Y' },
  },
  {
    name: 'wallet-1731277116-170',
    address: 'agoric170qkl4ke5d3qdyp0sr5w0dmw4m67dz04vkmqfy',
    pubkey: { key: 'A3WlfRrJMHXn0ac70vK/OU6ivJ//ZzIIw07Jf1Cw46xW' },
  },
  {
    name: 'wallet-1731277116-171',
    address: 'agoric1zn0n06yjt4gamf230j0zrf8fkqwr4t6r3vea9f',
    pubkey: { key: 'AgcXuX9gdAkQlcrtnWd54K210jHsDVhq+gEkjoD9rPl3' },
  },
  {
    name: 'wallet-1731277116-172',
    address: 'agoric1j95qx3sgr82jkk9704mpc7lzz93rptt5u3wphf',
    pubkey: { key: 'Am2cHjbek2KN7PJYCqg4g7tmZmFygxMRSpVOHyVRginq' },
  },
  {
    name: 'wallet-1731277116-173',
    address: 'agoric14x6mlguck09td82a34knsvtyeh2m3pccjj0asm',
    pubkey: { key: 'AudP8u4EvweNdDCDYsDZGZ4JuhwtpPmAgdAUrRTheC8L' },
  },
  {
    name: 'wallet-1731277116-174',
    address: 'agoric13ve8ed0hvst62flyvtvdqwkjc0as258z7xgxqc',
    pubkey: { key: 'A2ABDXwMU1mti0/bpufx4vMMWA1vTaxAKoZb4qFDwUpm' },
  },
  {
    name: 'wallet-1731277116-175',
    address: 'agoric1lpdeq2gag4uewtkf98fyvlylmkprc4sed2fnen',
    pubkey: { key: 'AmowYViLE28paAVM8WvnEIljbt8yS0VsV6rk9gTyd1Kt' },
  },
  {
    name: 'wallet-1731277116-176',
    address: 'agoric199pft9xa2a29rfggs8c2jhj8q87vp3a7hzcd7h',
    pubkey: { key: 'A0fxYNxao8VcNRDRDvL7rb9KZW4V0I7RZswG6sVD9F2y' },
  },
  {
    name: 'wallet-1731277116-177',
    address: 'agoric18hq3wespe3a78mzs7ngqcldhdlastcnxl8kyrx',
    pubkey: { key: 'AgD/jsZXZQP7OqcS7eL4R9GY1Hqvck7YIfb2FWi4RqzR' },
  },
  {
    name: 'wallet-1731277116-178',
    address: 'agoric1r4rxreds00w2cn0w903yz89wzcg7dk9jhcafxg',
    pubkey: { key: 'AgSqbMKHh9OZwaRONaVewe85rT+PT068H/j4hXGto9t3' },
  },
  {
    name: 'wallet-1731277116-179',
    address: 'agoric1qh7fuhmfvz789swsgsytpcerw8s28c6w83g3w3',
    pubkey: { key: 'Amf5GPilm5oNxhwt4J6gWTxEKI7IQ+kCqSMBbLFdiR5O' },
  },
  {
    name: 'wallet-1731277116-18',
    address: 'agoric13mhm3a8w8lt7ptslwjjm806jmwq5n2yt45lkat',
    pubkey: { key: 'A4UNUqfBJSK0IpjSPbJ5CxbNY/R3oKL8cBRNdsEstR4e' },
  },
  {
    name: 'wallet-1731277116-180',
    address: 'agoric1v4h82w3x9fcy2q47cqgtchg84dajw53kkgp0uz',
    pubkey: { key: 'Ampz8fwYWbFT9de3kYg71aUskgld/7qfIflkxH+VQUVc' },
  },
  {
    name: 'wallet-1731277116-181',
    address: 'agoric1wu206l4uhx2ra983u2atq2kkqnm0r96ht4psjn',
    pubkey: { key: 'AsEgjizE5DZ2tf8u9OtQRR1lLDmSljRzHI2y+dodv9YH' },
  },
  {
    name: 'wallet-1731277116-182',
    address: 'agoric1f6uf4h8le36qtst04zjgld4lg85mejl3vd8esk',
    pubkey: { key: 'At4XXqLA9p3PawWdAWtlEftF4MmCdbOOCVrZuPqUFkT2' },
  },
  {
    name: 'wallet-1731277116-183',
    address: 'agoric1lvvd7x60eda9dvvqc83kvq84m7nufhmcz9yfc3',
    pubkey: { key: 'AzkmVtbqhUQt4yejR0koH+Xd+a45nHmkzTB1D5gHdgXd' },
  },
  {
    name: 'wallet-1731277116-184',
    address: 'agoric1yea40j04k8ujxza95t7766fjql3nrm0c9pdggz',
    pubkey: { key: 'AwVC30NdLRHjRJ7zTobrv+/wsJfTsqCIN35IqwtTvffS' },
  },
  {
    name: 'wallet-1731277116-185',
    address: 'agoric1es7drfth7su7xs64539fzkdmlg26rt7p607g68',
    pubkey: { key: 'AqNJs8l9YaRNsJZFJoRBMm4GXcbHymaf4QPfp3lIO/oE' },
  },
  {
    name: 'wallet-1731277116-19',
    address: 'agoric1qlxazdvc79a9nxl8uhr88njrwp2psxx0s5dls0',
    pubkey: { key: 'AhXLKwQB8v+FiR+Dy0dhBo0F9430CuLi8qwALU2Q7smC' },
  },
  {
    name: 'wallet-1731277116-2',
    address: 'agoric188gu9dkv0ey3h8c79n3xkdjr7aa7p9pw9rrtn5',
    pubkey: { key: 'AsMy9sdrQ7ORSha5nYaA5OinnBaXD/nanO+G4op3OX4c' },
  },
  {
    name: 'wallet-1731277116-20',
    address: 'agoric1cww6mpazl8epxk029mc64f7pm66e885z6hn26s',
    pubkey: { key: 'A973wY6QrKUEV/rc33x1mu7pWAfCYjwJGAKLFgWz1tZo' },
  },
  {
    name: 'wallet-1731277116-21',
    address: 'agoric1g2d2nt5a9m4qg6t3ta3pqa6ftlnz6zvywhadrn',
    pubkey: { key: 'A1xpDVrl2LUWbSJHDAtbGS4o247onKmFVV/K2xicrVpm' },
  },
  {
    name: 'wallet-1731277116-22',
    address: 'agoric1djwjsjel7q58ufusu989q0784m46pd06v9e3aw',
    pubkey: { key: 'AlH5crvUD1L8CVAeZyLIPsh3C6r0xuMUg/dgWweH4RQS' },
  },
  {
    name: 'wallet-1731277116-23',
    address: 'agoric17qysg7zuue64kxjd484jc8n54n6mftanfq7ddz',
    pubkey: { key: 'Ai930POJ/WpOeU4iV6LAfbjDEHN1i+0AP5UGrVu+mU5x' },
  },
  {
    name: 'wallet-1731277116-24',
    address: 'agoric1zmajr36xrjdkl94pkattrhk5gs8859grqvru4m',
    pubkey: { key: 'A4vC6xjdZSGzUMGdKx6qnHALzZh80yUZ9hTTW2OpHLLT' },
  },
  {
    name: 'wallet-1731277116-25',
    address: 'agoric1v3tg3nk8r4ndawqx9gfx808rda4d5dzx6jkw6j',
    pubkey: { key: 'A6Pq2414VsYaJyQ+O4nIZcIjxd7yfrMT9m3M2ylxR0Zi' },
  },
  {
    name: 'wallet-1731277116-26',
    address: 'agoric1s2dvk5xxnwz7un7uareh63cc3g6y8l7vnjr4d9',
    pubkey: { key: 'AmwO+S7BHHNEehFnBGqsQlgF54LcN2fgm2LPImoVjAEK' },
  },
  {
    name: 'wallet-1731277116-27',
    address: 'agoric1t35nlveyzw2kjuall3h78c5t8qcsdlgu2qgj2j',
    pubkey: { key: 'AwGRazLdf3C0jfSEjWTu3sSwW1cPsJRKpAHctRYv9QGq' },
  },
  {
    name: 'wallet-1731277116-28',
    address: 'agoric1q3f46v0mawgjp4vdc5q5g03xxcdh5a0r366z29',
    pubkey: { key: 'A4VYqNxelNd7h8xWlZu/IqgGv30hduRuhygCMYQpZyk+' },
  },
  {
    name: 'wallet-1731277116-29',
    address: 'agoric1kq8t9szdreha96sz3459u0lwnlnzqae8n3jpav',
    pubkey: { key: 'AtsvAASOMb2wcG1rODyFkEbE5fIOBGkxqJcXw9ltH7lm' },
  },
  {
    name: 'wallet-1731277116-3',
    address: 'agoric1zvkurdadzu0h5dmvrh2hgjj50k55dhwa247rx6',
    pubkey: { key: 'A5X9LgZ7Uf81IOKy+mYuuU5lKLWx72OhMIR9DqMtzP2t' },
  },
  {
    name: 'wallet-1731277116-30',
    address: 'agoric1vxp5xrggfxudfjcaszggjjpwwsa9yhdmf2km54',
    pubkey: { key: 'Ai3MUBar+m8r6mOmtOl7uqWD5GNW2gDpLvl+WP+PBBfs' },
  },
  {
    name: 'wallet-1731277116-31',
    address: 'agoric1plnchjvf9akf3v45qawxyv4muz39q3j3hyl5ay',
    pubkey: { key: 'AkCXq3XqGUeiPpAAGHLCRjFcxOZIr25af8fx6OY6JRoX' },
  },
  {
    name: 'wallet-1731277116-32',
    address: 'agoric1grgeqgr7meupg32kwyvhugusuuearz4sfqcw24',
    pubkey: { key: 'Ag2mbQt26xaZOICLVAIrlDN6FxGIAQ1VmbElwErz7RFO' },
  },
  {
    name: 'wallet-1731277116-33',
    address: 'agoric1m889vtfv5u5d3qqf7jxer37nhjpfmspwwp5xf8',
    pubkey: { key: 'AnkRxIKjl+W0oTMkwWjwO5SqOfoStODFtUEyKpxSBZjy' },
  },
  {
    name: 'wallet-1731277116-34',
    address: 'agoric1cre0r0ca82jfkl4truacs533zt3s44lk95d5um',
    pubkey: { key: 'ArDOFdX1awQmdwa4xV3szreE++Li+a9RqakbYkYPE2Aq' },
  },
  {
    name: 'wallet-1731277116-35',
    address: 'agoric1eytqskey3uy672pxc74uezs7lrya3nndqfmned',
    pubkey: { key: 'AlBSeEXb0J3LZzCj3m6Hdi426TWnfH+r9ABDRuVDa43I' },
  },
  {
    name: 'wallet-1731277116-36',
    address: 'agoric15y9czct2jd0wtg8s443j006y6c6mjqqtqte5g4',
    pubkey: { key: 'A/Uyj08FKei1lIbBnzvUM2067cpqe11F6dbxmUnzQMyt' },
  },
  {
    name: 'wallet-1731277116-37',
    address: 'agoric1kv7smunrm3f4h4kj7yakkjtdwph8njvrc56hhf',
    pubkey: { key: 'AnMJ0g+uG7tnba3l/TOcs+wKNs5WzSBmStLJCSFxBRbj' },
  },
  {
    name: 'wallet-1731277116-38',
    address: 'agoric13t0ug0j7mm2j7a9ej76d9qxkue32373gfmpx4u',
    pubkey: { key: 'A46E4arFVtqkuF9Brl7E8VrK6mKZMk19x+VFuSBJcKzq' },
  },
  {
    name: 'wallet-1731277116-39',
    address: 'agoric1waejkeyppcvlqqzd6tknuqxx6v3xedsh3v8xx7',
    pubkey: { key: 'AhaK4i6VB5lMP/f3G1sP1EaNUKSlRONTwfOx+8JiDVuj' },
  },
  {
    name: 'wallet-1731277116-4',
    address: 'agoric1hcangx770kzv2ysjp7gegnan7p2kcx52jadwya',
    pubkey: { key: 'A/dyU0pT3+pdmKQNGFb+penGQowpbI6GcCmDd4EKwynE' },
  },
  {
    name: 'wallet-1731277116-40',
    address: 'agoric16yawzl7umqheral694y844f8w83dwdpne3pgcw',
    pubkey: { key: 'AzYQ61L23dauDPGkaKaXynwXJ1aJCVBNCt9YXGGLiLAG' },
  },
  {
    name: 'wallet-1731277116-41',
    address: 'agoric1vtmukazn25jc02ck3tvxx8j3xw0vj4nln88pm6',
    pubkey: { key: 'Akf8HDcDo/OEMdVfPDzEKnBU47GO5zqo5mih5CoSbxaa' },
  },
  {
    name: 'wallet-1731277116-42',
    address: 'agoric1unywh6rslqqeft3yr0kzkfuer89s6kvcus2mxn',
    pubkey: { key: 'AoaCOfOT8GBLD0PGi/EAX1ERnCamRi5sjfEXAHQas4bY' },
  },
  {
    name: 'wallet-1731277116-43',
    address: 'agoric1yz0x6ga6jkukv8u6sgqthdq4dgmx8jhj4z3n6k',
    pubkey: { key: 'AuL3JcIysw0h/KKrufiDqVr4XTr6LHupcLtL8f+8UV2C' },
  },
  {
    name: 'wallet-1731277116-44',
    address: 'agoric19r8fwg238lt97h37qcz4r8kdqsfup35l5e59qw',
    pubkey: { key: 'AvFP8iNzPv1df7wBObQhpLaxq69ntENt6nKBzRLc6IUE' },
  },
  {
    name: 'wallet-1731277116-448',
    address: 'agoric1jj7ukq526mze7tgwcvpzl0mhz0l7ln3j6pra36',
    pubkey: { key: 'AvXmmCqBbzK/d9Ghc5noyucCeaPnGCp+jpe23DCPZIW0' },
  },
  {
    name: 'wallet-1731277116-449',
    address: 'agoric1fczvr66v9zgegdskdamahlf44nymns6tt0qyae',
    pubkey: { key: 'A5AG0SqADpKI9C3vFywO7G9Hk/mojmSJq3DrG5RIDtTt' },
  },
  {
    name: 'wallet-1731277116-45',
    address: 'agoric1txuldrseq4xj47fat5czcsnfy5mtx7ultwv9nd',
    pubkey: { key: 'ApuVUTxYn60N4a+gfzGOb6nKveOEJ5t0yVZ+JqPExhOI' },
  },
  {
    name: 'wallet-1731277116-450',
    address: 'agoric1ghs560n5edn3nzv5y403w74kh3q93hcaytukpy',
    pubkey: { key: 'AgY3Ed/iQizpzZbgPsPx9qDrOErg7TmMHXoKlyE4QlGs' },
  },
  {
    name: 'wallet-1731277116-451',
    address: 'agoric14p8952ph9ufaeyu2wjx4yquppem56g240njp4j',
    pubkey: { key: 'AtJrXqguP/ai5Z+6PBvtnFPJo01gGWRTub8ZvJeSKKRA' },
  },
  {
    name: 'wallet-1731277116-452',
    address: 'agoric16sf785gkzy8n04w2c7jgwspcqang9dkwdv04pd',
    pubkey: { key: 'A+SpcBHV91162BKGtaiU3uuPxrUDQi8uES8lFPyqf96v' },
  },
  {
    name: 'wallet-1731277116-453',
    address: 'agoric1cvg4umlnagx9wkhduszkfvpgs668znjgzeyrkj',
    pubkey: { key: 'AlBdF3sqjI+jqp1T/6/k6XkWGy/mwRlW0qb7ASYM6wYU' },
  },
  {
    name: 'wallet-1731277116-454',
    address: 'agoric1yt2zsvudmcujjrdtxsxryn7uf730d65856myca',
    pubkey: { key: 'Am+tytrYWOH9+va+KRmMruE0GkgSZlOaIjehRtHBl6tw' },
  },
  {
    name: 'wallet-1731277116-455',
    address: 'agoric186gfl2633y6euacualacz6mwt78glufpygfmgs',
    pubkey: { key: 'AsR2vP9ayrSGkszxzBud34PEFMRFfti2EELKqUSK1i9B' },
  },
  {
    name: 'wallet-1731277116-456',
    address: 'agoric1r3npy9u7wpyyvw7jnwcnxvc5pllxn0z8j3467n',
    pubkey: { key: 'A9vx56dBGv1gafMDlIQt7IcAHhfY42oqFBd1paVwGMZB' },
  },
  {
    name: 'wallet-1731277116-457',
    address: 'agoric10lrqf7yg9jdpfwnqdy7zt4l5yvt27yh6t8f0j8',
    pubkey: { key: 'A6FRUSbwvRC77yRIWpNLnN4xL3kPjEICx5eUKgK/vBIL' },
  },
  {
    name: 'wallet-1731277116-458',
    address: 'agoric1y8gz93rj9lqul5f7aa7mv6lj4wd53d9qsaeq64',
    pubkey: { key: 'A5OTnVUXsL8WqeNzhKPWLZeu4bCGkQwmsnb0QSRq1ggu' },
  },
  {
    name: 'wallet-1731277116-459',
    address: 'agoric12enkjz5g76ddaxng57nvhn2zyrast3j2xctk03',
    pubkey: { key: 'Ai8Ai7GZAVEU/2hNjJNB70B0OxCato8f3LjGB3U6CTe3' },
  },
  {
    name: 'wallet-1731277116-46',
    address: 'agoric1f0vhznds65ls3cr20kjp9xn3lvuc0c43ujqu38',
    pubkey: { key: 'AslAaBH6ENj/bn8SHi0noItPpZn0j/T4oQ+SX1GhK3r9' },
  },
  {
    name: 'wallet-1731277116-460',
    address: 'agoric1382vtruu0x3l3h4nj8t8ln2r9y34z7nvs9f358',
    pubkey: { key: 'Ak6FIeGdfVNgJwvJqQA5HGdZ9yaLiU5zMGs0Orh+AwDv' },
  },
  {
    name: 'wallet-1731277116-461',
    address: 'agoric1nptg34ncymhqqdtqv26r3zjx5aezrqnr9gm4q5',
    pubkey: { key: 'AwQOkfov4x0r0EUq5peQ//sFehHiaBNZCCm14xOKQ105' },
  },
  {
    name: 'wallet-1731277116-462',
    address: 'agoric15h5yps4man68nmsc22jt06j0p938herz4rtvkv',
    pubkey: { key: 'A9OWTuSvxwjVD6i1UXybZ0TQYtN9XRMINC82oVo3vlvP' },
  },
  {
    name: 'wallet-1731277116-463',
    address: 'agoric149hwur9zn56nlw5xatgskhqr0rqjxmj7nghsfm',
    pubkey: { key: 'AhACT+dr1ieEVzP1X69APmQUNNVR7teNBMdBpJ4O3Vmo' },
  },
  {
    name: 'wallet-1731277116-464',
    address: 'agoric1xaxe4n666gtd983uw3rwt36p0d4a9e6allapvs',
    pubkey: { key: 'AucSF+Wgjva+LTWNcrPJNesHuPVPbhB/2rhUP6pCDSQ+' },
  },
  {
    name: 'wallet-1731277116-465',
    address: 'agoric15296phpqae36yz6vr67mkwrm9n04zk36veguj8',
    pubkey: { key: 'A7ikfDJNcJAbTQ7AaxV/YZ0KL247DWpcnW2o4ajWVizy' },
  },
  {
    name: 'wallet-1731277116-466',
    address: 'agoric1haaq5f8ucvc66hvu2hhgxdluk4xyfnsj8gqfz4',
    pubkey: { key: 'A4C14Wem2AHDGxQa15h7QFR+g93hHSQxDTPsbhAawfho' },
  },
  {
    name: 'wallet-1731277116-467',
    address: 'agoric1jgmuudanv9amlcm6ymu66p2ejhcyqmd7rgqwjg',
    pubkey: { key: 'Ai0ZfHmuVk4d07YDYNZz6+o//Tdlj2rMUvebPCyyKOve' },
  },
  {
    name: 'wallet-1731277116-468',
    address: 'agoric1mm4vt4hslc7k4fz8yh25dzaxzsdvk8wj93n3gc',
    pubkey: { key: 'ArPFuszvtXI8hkmPPfursPWRD+Uf1Kh1XCBOZHgADt7n' },
  },
  {
    name: 'wallet-1731277116-469',
    address: 'agoric1sy7esz7zycyjhrgvp05y5esnvtnyygrv0k7ezh',
    pubkey: { key: 'A8XjylkvwzMbyKw77w5YQ6cpS/apeSpjT45PxULS6ZEu' },
  },
  {
    name: 'wallet-1731277116-47',
    address: 'agoric13wm7ce9qhkgp345yuhfec4makg7nept2y93agy',
    pubkey: { key: 'Axq9Hp88EqPSbx7QOLzEa8LHGz1YcCr4f89wqHqpl/SA' },
  },
  {
    name: 'wallet-1731277116-470',
    address: 'agoric1lypamlnw6jfhk24zvpy3sukywmlh34rt0a88wu',
    pubkey: { key: 'A5mFwZ3TEIARhV/Af971W2iizGhuX7sQMWvqmGZZ/CNW' },
  },
  {
    name: 'wallet-1731277116-471',
    address: 'agoric1kywyk8fhmm306shr05znfavyayyueq89ha8frt',
    pubkey: { key: 'A3eMptPgVeHtgDcQJ7AJxmQ1DgxocFLR+Vb0tj3tJumQ' },
  },
  {
    name: 'wallet-1731277116-472',
    address: 'agoric1f54k2xamp5fxlg687wtaw32m9f4fqvfe92qswj',
    pubkey: { key: 'AigkGAF1lr9ty+RibPfm0BQ+JNXp75V9BJxQn0QRR+5j' },
  },
  {
    name: 'wallet-1731277116-473',
    address: 'agoric173qa8z980pg70syeq5752fc4w783tzjufp6k3z',
    pubkey: { key: 'Ah16qdXSkyvJeNx8RAeZS+YdHgOSdmsVEdfQA8B7uFWK' },
  },
  {
    name: 'wallet-1731277116-474',
    address: 'agoric1l2t98v3lyyzxqscdk2qc9w5v6zfag5krjznnet',
    pubkey: { key: 'Aj8RVvNy/jmCcrmEYNvZWEKvflDguHIjqHJWDTKx/v1G' },
  },
  {
    name: 'wallet-1731277116-475',
    address: 'agoric1hz4k65fw9kxkxwk49qtsytvrjd7jgscnxm9fmz',
    pubkey: { key: 'A/y8kn+knJFuNNBv4u92rASzYKP/7MGf6q5o1r6LZs8I' },
  },
  {
    name: 'wallet-1731277116-476',
    address: 'agoric1umeqf92cez2mtc9h59ew6e7wmwg5wnvad0tsrt',
    pubkey: { key: 'AhOsImTv4+SNxT1iNbwbK08t+a7RCV2D5ukMHZNy//3J' },
  },
  {
    name: 'wallet-1731277116-477',
    address: 'agoric1kfycy7mmat9y3gs6nwpg8lrcd5yttm7hq8ygm6',
    pubkey: { key: 'Ag+0F2nkuPsM1lA3K51sPzG5wCwhHL4+vk0psMCzwv9y' },
  },
  {
    name: 'wallet-1731277116-478',
    address: 'agoric1su0adwh5uupjvkp72y63shr2zpmu92q5e5j0mv',
    pubkey: { key: 'Ai3zXWpNAIO3NnecPvYTFzPlJvXRrsDy6zVvS93sxr5u' },
  },
  {
    name: 'wallet-1731277116-479',
    address: 'agoric1x7qmn85zy7qrta0dm0j3jcdqyhpz0hlfhd865j',
    pubkey: { key: 'A/L8weNsyVfoYbmY+6f2aZiIbclDZe9ZE+PV8rQwrwt8' },
  },
  {
    name: 'wallet-1731277116-48',
    address: 'agoric1hm6evatrekylxt5dlme0zvec2l2lay05uhzl65',
    pubkey: { key: 'A2eLke88RBlMiuVtjlaXyJG+7bntFA2hlEACru4ktXuu' },
  },
  {
    name: 'wallet-1731277116-480',
    address: 'agoric1s53xhxfhp8yzcscwu8ax3jauazm4uu7s2z0hen',
    pubkey: { key: 'AtlroKZY2/pXB+XQKPrOORkcs/al02Y/CDI8up/r+pi/' },
  },
  {
    name: 'wallet-1731277116-481',
    address: 'agoric1quzsjftz7rzerpc0mfcw6fwws077m3w5ns6ydd',
    pubkey: { key: 'Aw1Ii/fQdVhKuBFVA76wuSzaqn4W+F8NmGc1ySlvs5ZJ' },
  },
  {
    name: 'wallet-1731277116-482',
    address: 'agoric14qmr8jm2d4gx0t2y6g97w59uvgzy686f0rq4ar',
    pubkey: { key: 'AsMOEMjHdoH8jF5VkgRlxzLuyL+iH8Ny6TRteYHWv9Fx' },
  },
  {
    name: 'wallet-1731277116-483',
    address: 'agoric1d4gtd4ht64mch3q2rktv3xwwjku82vjwa395hh',
    pubkey: { key: 'A0RLO3rEsFUuTk8f0im/XTKjUJd1PN9VxxFvw43johgU' },
  },
  {
    name: 'wallet-1731277116-484',
    address: 'agoric1gs6mp7wn8qdt8u9xfknlrm0qnknk5mkpv5zta7',
    pubkey: { key: 'A3PtTvzBdzT2sChIBVBhZ5BRV5cf1n7uTay4n5t/dFsZ' },
  },
  {
    name: 'wallet-1731277116-485',
    address: 'agoric1sj2j546quy8e3w38erlu8lnplssrekpuf65l06',
    pubkey: { key: 'Ahvm7sVskuNX9VumwyKY+jV37PWSV4vIFPcGPkLHAwK/' },
  },
  {
    name: 'wallet-1731277116-486',
    address: 'agoric1kpr369qha4vgvgfkmrhgjrkwu0cuxstuh363h3',
    pubkey: { key: 'A5rZYUuX9AKEq9iq+srzL3vHdZ92c2iVqeGBmokizgeY' },
  },
  {
    name: 'wallet-1731277116-487',
    address: 'agoric18lq8xtf037q0eet8c7vvrk5rcuxxhh6a5d8ecj',
    pubkey: { key: 'AxBjNqqn3LXwIp98yX+KT/mlJ02Lb9VnE40G9BFm6mfg' },
  },
  {
    name: 'wallet-1731277116-488',
    address: 'agoric1c2x7evhag5l9yvj83rcf7p6ca6x0pmg54hu44x',
    pubkey: { key: 'AoFharaYC8NORInj5zQHFFrqIqRNcDmaIMTUc/TGmhn1' },
  },
  {
    name: 'wallet-1731277116-489',
    address: 'agoric1ayyks3zts9duvph80r0t6a4kug5tpgrfq3tha0',
    pubkey: { key: 'ArzkSqfKS4kHVfR+pmt2pxYQ6EBS+5FVh3v1OQngr5kk' },
  },
  {
    name: 'wallet-1731277116-49',
    address: 'agoric1j9c624lvftqlkynkz0g0458ckddvr6ch8a06hz',
    pubkey: { key: 'AhJR6V+O30NMde/SoHIgJVh3DGp4PBXZBUApShZ9eEAp' },
  },
  {
    name: 'wallet-1731277116-490',
    address: 'agoric1vy5z2q4k76h6d26kxs77yjs2ajrf48u5j0l7z8',
    pubkey: { key: 'A7ennOqJPkHwpMQeJb6M9c+VYQoDmNhg0oAYD6i6B5pM' },
  },
  {
    name: 'wallet-1731277116-491',
    address: 'agoric1ewrkfnl7svemus4twpmezcq288mrp8ajjj9d57',
    pubkey: { key: 'A80IZGNIKZlvxYGRlCamsFXJoqQbXU1ENVu20jwTJN2+' },
  },
  {
    name: 'wallet-1731277116-492',
    address: 'agoric179y5mfkxa98yg6y0gwg0pevknz5tkpxkn2y06v',
    pubkey: { key: 'A4XUQYLOz3oeLWRxXTxAV6jPFUiMydnpa28Fsr/07vMA' },
  },
  {
    name: 'wallet-1731277116-493',
    address: 'agoric1dtxv7khxajc45nzhmjzgywl50lun2wkhawgmzs',
    pubkey: { key: 'Ao3YCG1TiPX0OI1TdSF9HCJn7zCT45arxANWp4L7/EdH' },
  },
  {
    name: 'wallet-1731277116-494',
    address: 'agoric1ncngnh4qcrsme9p90r2vpfn96ghv820tzvnker',
    pubkey: { key: 'AgYtyv2kZlxeANGcLW7Y+kmqJs7cOdP4PCe+SEIA/F8U' },
  },
  {
    name: 'wallet-1731277116-495',
    address: 'agoric105k6cyuc8q259ncwx4mh2v8wg5vq0fquu8d0mn',
    pubkey: { key: 'Ak66D4liMBMJZHKvZPUKzY5Q58ysAP5/SVM7p+V5ELOG' },
  },
  {
    name: 'wallet-1731277116-496',
    address: 'agoric1mpkzk60dwgyhmzf3hncz03g0avvp0f6qvkapdx',
    pubkey: { key: 'AvjUahMrSvK8tdKdQ5n7WjEIOlhjrS1+Ta0SczP1HJHW' },
  },
  {
    name: 'wallet-1731277116-497',
    address: 'agoric1fr9aaswkf0akx9y4qusr50048t3s73l3k3d2vh',
    pubkey: { key: 'AzYxw095WRDnDl95OC9Xti6WCJXMaeBJcyF2+az3ib6e' },
  },
  {
    name: 'wallet-1731277116-498',
    address: 'agoric1zejdalzte2zag3hlfqz9fztrqzdtgm4e80qd05',
    pubkey: { key: 'Aqk0oyIRZmumrj94EICTmMkmCBWaqZeLq2gKL/GTOHvN' },
  },
  {
    name: 'wallet-1731277116-499',
    address: 'agoric1r36d08f6qy6dwcp23sfqvmua9rsft4txz28s4q',
    pubkey: { key: 'Ap1NnHk9/FdTTlOi1N5+qFipiLFnFJc0KqIMnVjql5M6' },
  },
  {
    name: 'wallet-1731277116-5',
    address: 'agoric19s266pak0llft2gcapn64x5aa37ysqnqzky46y',
    pubkey: { key: 'AwSxb3Rltxqvz7fz3iF6tzNZrjBnCfHAWt8mBHV6F2ZM' },
  },
  {
    name: 'wallet-1731277116-50',
    address: 'agoric1knek3g43qldr9qtzhrj7j028nj2gpqjchdkyta',
    pubkey: { key: 'Azchw886rbMNuttz51CkX9ChleJPRiQvNFP/N1lIJB3h' },
  },
  {
    name: 'wallet-1731277116-500',
    address: 'agoric1eg6uj43dnaunatn5rp623l4lm5fq25dmqlcuw9',
    pubkey: { key: 'AoBrLWZaW71T/nENVn8Qw741Gp4vrR3rrwXniruPC7lh' },
  },
  {
    name: 'wallet-1731277116-501',
    address: 'agoric1hnuc0fju7rvgqp3nz8tcgtqze4ltzesunpg4kg',
    pubkey: { key: 'A2jilix8Ilbj2ZMcsO4HYKlCzErTCUwRFcAlKvGPPOxW' },
  },
  {
    name: 'wallet-1731277116-502',
    address: 'agoric1fflw7wdmnnfd97re3g7z8tk3wd3gu02scunuew',
    pubkey: { key: 'A5MlPtK969L6UOtkQnbS35tjykicrcwqZW/kkYSVjiTZ' },
  },
  {
    name: 'wallet-1731277116-503',
    address: 'agoric1pn8kue9fz6zml3d60q6lxd007ncxksgl22xgpd',
    pubkey: { key: 'A6Xul14YVFqYEcYGai89pVTKcZIz9k9KRIKHZ+cD3PJv' },
  },
  {
    name: 'wallet-1731277116-504',
    address: 'agoric1vtz5hgx33e6nkt5ulwmwjp0npluaftd6wj9lyr',
    pubkey: { key: 'Au/5knPQsHV3a15DeXWBMXsLH4FLALQ0Yv/1/2FQ9Pd4' },
  },
  {
    name: 'wallet-1731277116-505',
    address: 'agoric1y73e5weyvfsvl64ze7sdgq59yajktaug2m70ht',
    pubkey: { key: 'A+9gFFj2Dp2H3uEYi/4uUzooVxOtI5wb+EdWGCy432YO' },
  },
  {
    name: 'wallet-1731277116-506',
    address: 'agoric1qvnk2zp69kshqany9j57qm27ucchuh4x7rdluk',
    pubkey: { key: 'A98zinn2croeg1DWsFQuBkZ3kBU0L1kj4azNgunG2xte' },
  },
  {
    name: 'wallet-1731277116-507',
    address: 'agoric1jte5fgzznkw29hk2d30qrnf5zmm3wkq78qf9eq',
    pubkey: { key: 'A9xw7eCKk13G4RKWh2twJij/NPO9mu16/sJ2wtRWFqmG' },
  },
  {
    name: 'wallet-1731277116-508',
    address: 'agoric18dc9nsztlurh2uqcjmamwxm4v20p8gzxyejfru',
    pubkey: { key: 'A0mCdt8ML8Ly436pYMbTxVNB4wu66/LerIW+UrpFr/D+' },
  },
  {
    name: 'wallet-1731277116-509',
    address: 'agoric1mjlh5t535k0gxf56yjkwtzjtentjfx3fnu2aw4',
    pubkey: { key: 'AquMONU1U0elfCSzC9HgsB1xNs9MJ62+dxUANDo37KCS' },
  },
  {
    name: 'wallet-1731277116-51',
    address: 'agoric1xe40lz352spr8wepew9yskr2ta7f4yr4uxnchn',
    pubkey: { key: 'AouowtE1DCBGDfdFw/XryM+loE79z8IyoUmKxPox7Fd5' },
  },
  {
    name: 'wallet-1731277116-510',
    address: 'agoric12y492wnhnhcvnreaxkly92ys4aqtesjvrj036x',
    pubkey: { key: 'A4EvVuIDFyWvNzT+TW++XdN8gdEWW6vyX9G6vOhlKkFp' },
  },
  {
    name: 'wallet-1731277116-511',
    address: 'agoric1eqaryucyj746s6qed2skfy5wt9l0dxu6tqctul',
    pubkey: { key: 'Aut3kGXW1ko91uZRk3W219SBSMd65JFbP+KI2B7UnOEi' },
  },
  {
    name: 'wallet-1731277116-512',
    address: 'agoric17y78amw57as9f7qun5x8rclhh4n9jwpzd3lhwu',
    pubkey: { key: 'Axc2O2dtdtRjlm92Y1dYatImeh16w5LACIzsqRChq+u9' },
  },
  {
    name: 'wallet-1731277116-513',
    address: 'agoric1ygth9tul2rmkpmrd6l2xkdmryrmqw9ymzvs3sw',
    pubkey: { key: 'AtMOsIy1fODHVRjhIyQWBhKN50RzVZK2ngdgUu/2ggfV' },
  },
  {
    name: 'wallet-1731277116-514',
    address: 'agoric1lzkru055n0tk26yvd6md23qjza8f25ywt2qz6e',
    pubkey: { key: 'AmxBlauLB/KmmDjgH85b3V69WXFoiNid+eaXLAYd24nc' },
  },
  {
    name: 'wallet-1731277116-515',
    address: 'agoric1l8580w8gx4ar9h6wn56sgze7nutrvj63wt6dmt',
    pubkey: { key: 'ApizgBT2mQy2Fripvm1r52U0Lwh8+k+1xWOEbFZ0T6b9' },
  },
  {
    name: 'wallet-1731277116-516',
    address: 'agoric1uxtrxd0qnw35r6zj0wyn3vpuw8e2axzds6uar4',
    pubkey: { key: 'AgKv9dVS4zpvD8JAcX2FMdS1RZRYT7RHO0wkR+f66XPR' },
  },
  {
    name: 'wallet-1731277116-517',
    address: 'agoric1mnq57x2cgydfewt5maqmzwfj6ev6l9x8fx2fz0',
    pubkey: { key: 'ArZpl389vqgbSrb7BgM/LMz/ZMI3iYC607feWNIfxRrr' },
  },
  {
    name: 'wallet-1731277116-518',
    address: 'agoric1xhr3uglv3daur047k845atfsyfppu5mkv5egp2',
    pubkey: { key: 'A0PIK/Clna2Xh8uAC2vLT4E8/UGu8QoSgukV79wvqtDE' },
  },
  {
    name: 'wallet-1731277116-519',
    address: 'agoric1x03r20ealm24xht2jumtzchpl5r760lal246j5',
    pubkey: { key: 'A2BgmRC2bYuL1YtWaqhPIPqt0Kfu64M9neDm58PW883Q' },
  },
  {
    name: 'wallet-1731277116-52',
    address: 'agoric1xcxlf29w7cna9fmnt6l9k7zs2aqxej5vns8rsj',
    pubkey: { key: 'A6cMaO6jDNHDvKuyKorpDdWKWrqmRg3btYFJwuMFp/kO' },
  },
  {
    name: 'wallet-1731277116-520',
    address: 'agoric1lgmtkdpvmr2tvjq48dkg2dvfpq8k9w4sw90ujl',
    pubkey: { key: 'AjjiS+udnBe1vz/mPlBSEHWLinnJyBmsm0ertBM0VHbU' },
  },
  {
    name: 'wallet-1731277116-521',
    address: 'agoric1855rkhe8f54zex60uy4n6z65xnr2fcxc594eaw',
    pubkey: { key: 'A4DlpIXnPkDTxMzYcSx3M/Oo85W8/xq9cxDIDd9AbGgb' },
  },
  {
    name: 'wallet-1731277116-522',
    address: 'agoric1pnpmvflmz8ff4d2yjszpnzd74ldesx0al0uw4d',
    pubkey: { key: 'A4iqod8fbX0hH5hApPlCGobfE1Z/baE9l/mecFiPvike' },
  },
  {
    name: 'wallet-1731277116-523',
    address: 'agoric10a5arz5qztjvx5cae2wx8f5z228qyuefvxqd45',
    pubkey: { key: 'AvR/n6uYVeiGP8wvzHk8K7iLuxWK8pZ5MU0EpVhvoRnp' },
  },
  {
    name: 'wallet-1731277116-524',
    address: 'agoric17ggz2d2krwh2rc3zptkcltkdpzkl3755v47u7g',
    pubkey: { key: 'AwbhofKbFezLLDGLhKq3iV94BHXx+pgyesSQTt0pKFCZ' },
  },
  {
    name: 'wallet-1731277116-525',
    address: 'agoric13c0hjc8754y47wwydh7h9tfhujtahh5v04z9qt',
    pubkey: { key: 'Ap8xxlJaGk8sH6Fj3kpGghRZKhyWYXHIbRBESUZhfN+7' },
  },
  {
    name: 'wallet-1731277116-526',
    address: 'agoric1ch8t4lu8kxg3s3s9u0vafhm4x79r7k5ygsg9lg',
    pubkey: { key: 'AuIYrxao5qjridiq0E6Xkfkqw6CX/2mV0KFVcSvhJo/5' },
  },
  {
    name: 'wallet-1731277116-527',
    address: 'agoric15karet0f5zqaza5p08fkdeycdunkzy83lzrw47',
    pubkey: { key: 'Ao5R9s9oNmEm8G/DND9fEItfcyffxqkyHgxKt1n5+ip5' },
  },
  {
    name: 'wallet-1731277116-528',
    address: 'agoric1vxdwjww8asvec2pjzhhxm0enszxmupjvrxfhmr',
    pubkey: { key: 'AtY5sxZ2uNCV9blQMRsYvjLmiwaKRq87ayHb9fJtIgwI' },
  },
  {
    name: 'wallet-1731277116-529',
    address: 'agoric1nl7kgsmzc2kujctd746wgl2j3kuu24urvkelw7',
    pubkey: { key: 'AxzWzcQvZlf1H14kHHmWOLcWOctRdK8Z66KFicLIn60o' },
  },
  {
    name: 'wallet-1731277116-53',
    address: 'agoric18wuhds0pul2h60skx89nped7cpxryffxp5c0g7',
    pubkey: { key: 'AzZlpZuxp9g92dHvaVZppk0XQYXriHjwL8bp0bWNuGRM' },
  },
  {
    name: 'wallet-1731277116-530',
    address: 'agoric17f0hqtumryhhar4k0uz007lrq9d9cmjga3z02j',
    pubkey: { key: 'A3qy5hTaFQVq2k0KZRbBPb5xMR1/WYTjMhlJy0pUlTcO' },
  },
  {
    name: 'wallet-1731277116-531',
    address: 'agoric1t3sz9t9079ta6x8y7zqyeduhvmp4w23vkgexlm',
    pubkey: { key: 'A6clR1LrET/eNOXfZBCuRZ51pF6efpqyS42Rw8V+zScR' },
  },
  {
    name: 'wallet-1731277116-532',
    address: 'agoric13nk7zd5ss56fqn2w3w7r2v67dzcz0d3xza4vt0',
    pubkey: { key: 'AsTj2nxrOFQ9eq/eYi9pjh6FBHog534R7/9VnjOIzgr3' },
  },
  {
    name: 'wallet-1731277116-533',
    address: 'agoric1uf4se0sykxgrqpt5zjwkl6ldlux223pzgu50p5',
    pubkey: { key: 'AvEVRH2SLaWDFg8ADm5LluPW3Vn5J3GLevWTxNEVNPOr' },
  },
  {
    name: 'wallet-1731277116-534',
    address: 'agoric1kd26pftdneyle4z3mgksevhphgwqjc0v8sc0cr',
    pubkey: { key: 'AukcG5sipm6ObHYnNmYBSl43DnRR0DBrMFW9a9XKBYJV' },
  },
  {
    name: 'wallet-1731277116-535',
    address: 'agoric1c2n8tuqgnlm2zj26rmd30g0c0e9z6pvzwmhsnt',
    pubkey: { key: 'Al11w+EKGtuvQjfmQPFNy1rLhMtQftvmk7+3VKJFIDOQ' },
  },
  {
    name: 'wallet-1731277116-536',
    address: 'agoric1hmxt9m3k3pnazmx9z408m6uwye2slzhvhtkm4m',
    pubkey: { key: 'AkSnfNQGcSDo7HI2RizxeVjMYoc+WP5nQJc8hvhdDBwg' },
  },
  {
    name: 'wallet-1731277116-537',
    address: 'agoric1a4yxw2z3rjzsul5qcgd6ymq53ed7u2l8z5zw45',
    pubkey: { key: 'Asor4dtefrdDHQ2Teex01lqyAPwNVfnHtntWCW+wUlOY' },
  },
  {
    name: 'wallet-1731277116-538',
    address: 'agoric1gd0kvssalmmmmp5aeltzy25ft98ffc66naefp4',
    pubkey: { key: 'AsS1jdLpqc49z5VZt9n+cFX7QgJvM9grqYBPe9C977at' },
  },
  {
    name: 'wallet-1731277116-539',
    address: 'agoric1zj53xu4l24w3er2sve5zexzadp8veplv6kyve9',
    pubkey: { key: 'A6C6M2kwKak6XYyRuD5T1CFDNSUFzT3mDAG0dmG0Ljaq' },
  },
  {
    name: 'wallet-1731277116-54',
    address: 'agoric1jxc6dj6wn82plvxwvc45ke7pyg70emu6nh4u25',
    pubkey: { key: 'An9F19nHIiB3k3fl42Zdv9hn1oNKU4cQGMp86wrA54oC' },
  },
  {
    name: 'wallet-1731277116-540',
    address: 'agoric12pf9ceurkkgc3dhy9kqvvs8cwrpprv66gnck7e',
    pubkey: { key: 'AhpyBSG01GcgfyQkESmVdC9O6WRaRBFvOZ9PYH/nC6Dx' },
  },
  {
    name: 'wallet-1731277116-541',
    address: 'agoric1vs87mv4muxgeujddpdd6assqrauf5snvyxqugz',
    pubkey: { key: 'AvSNPvPf42mkAYo4n1VqPlHAWH/Nmfz078WpOXki6h8a' },
  },
  {
    name: 'wallet-1731277116-542',
    address: 'agoric1dfv05takdp70p80swskp2fw5pc6t7tjt8tjfhu',
    pubkey: { key: 'A4CixJ7IzeYv+A2RsPNO3MFZoPC4hd/0xkaKPyXFbF5J' },
  },
  {
    name: 'wallet-1731277116-543',
    address: 'agoric1qa00n62609y3ked406dpt0fcne2wy3an449pjh',
    pubkey: { key: 'A6V2OdzejbrjdxawXppOGB+D+5IHIcMAQ+Cyyi+5GW2w' },
  },
  {
    name: 'wallet-1731277116-544',
    address: 'agoric1v9wwnyukwcrp4d2wvgq644whst0tj8mpql45g9',
    pubkey: { key: 'A+q145OiSf7mk0iSpxyOeNnmmCT2XWU2lEs+KnK32yss' },
  },
  {
    name: 'wallet-1731277116-545',
    address: 'agoric1wxgtssenxzne4r99lm9uqjq43f6lsqmk8572g7',
    pubkey: { key: 'AiVTDbDv52gmaMvrDmaTMG7MUKQuXhoBp3XWzqv5RMs3' },
  },
  {
    name: 'wallet-1731277116-546',
    address: 'agoric1wqmhvx5y63695c5n3n9ycj2nw4rtmlnskadhnc',
    pubkey: { key: 'AqaHI3sfsThNuxin4I01nK/rjAShXtHLaFHLmEk38BzB' },
  },
  {
    name: 'wallet-1731277116-547',
    address: 'agoric1s8xnqupttsqwg7veeq8lrppe3f8e0lxmh6me2z',
    pubkey: { key: 'Ax71Ii/1zZyJnqAuh7YgdSrnx65RXn9XvwYtiwNl5U17' },
  },
  {
    name: 'wallet-1731277116-548',
    address: 'agoric1nwdawwh8hthqm37ft204pn96x9v76ukkrq088s',
    pubkey: { key: 'Anh0Zt+NtBfnUQo9YHXE62XMtEeMXQwxY5Z+bnlOsrR5' },
  },
  {
    name: 'wallet-1731277116-549',
    address: 'agoric1tkgwqergr37kglm3qx53tys99r22zz5xm0p5j6',
    pubkey: { key: 'A+Ot/79cMuZOmMhH/W+Oxsj3sm/RloDE07YV+7XLSeoi' },
  },
  {
    name: 'wallet-1731277116-55',
    address: 'agoric1hatrhhlt7z3nc36n95gfe9jujlh2dv364w8asq',
    pubkey: { key: 'A8bIe23JymRrTSnvXNz7x7TR9BQE6MlcWk4LP2Lki8Fp' },
  },
  {
    name: 'wallet-1731277116-550',
    address: 'agoric1x6qns5ztqsae84tvwwhrj284awc3vzpvvta6nv',
    pubkey: { key: 'Ayw2xD7aqF6E+VoYu6wQRHXD1cUo9MrigX7w90iH0+aB' },
  },
  {
    name: 'wallet-1731277116-551',
    address: 'agoric13x6tm4z37nffnxggxmna85d5fpzec8243f7a02',
    pubkey: { key: 'A8SUDJqLAPGnTWRvf+lUM2+XP6CmbHNu3JfAUjgUe/MT' },
  },
  {
    name: 'wallet-1731277116-552',
    address: 'agoric14m6afp8kuqm36krgjkya6kgtrulxsmch9p6ye3',
    pubkey: { key: 'AqgIKknFKjGS92J7uJP9dmAkdetqtJwhBL7vBUtpOhL8' },
  },
  {
    name: 'wallet-1731277116-553',
    address: 'agoric1u40jsl67rlpa0sv3qfdn8y7tszu5y4s2twkkfw',
    pubkey: { key: 'AlXb9vWs7VJkEF5mdztDJysrcBL8Vpc/9anjIPiLh/Ux' },
  },
  {
    name: 'wallet-1731277116-554',
    address: 'agoric1wej9nc03cfz0ga2z90xd32wa0kex08styx5mm0',
    pubkey: { key: 'Ajvv0DGjYTVkT9wSDccwi8+i+3F13B3Kh0PeXVeL60Gz' },
  },
  {
    name: 'wallet-1731277116-555',
    address: 'agoric153cu9ypu20rhjnxdnereh9cvz46n4s6hk9muhc',
    pubkey: { key: 'ApatEgPXHSMo+PaF2y83kqd73org9qL/8vc2uRBsD5FO' },
  },
  {
    name: 'wallet-1731277116-556',
    address: 'agoric17430n7rke30drnfq8ftax6fma3qkyanjecv582',
    pubkey: { key: 'ArmVbTdKDmiw1D7Ao5TFYI4i0oHlUmjVnfYHQYIbQQv0' },
  },
  {
    name: 'wallet-1731277116-557',
    address: 'agoric1vk4ekytv2wlewdlzktzual2nwnkqdf4s69vt69',
    pubkey: { key: 'AyDVnZR9MtQmFEysRWQKyhxsI8zHyg1xQvPD6iT7PeDt' },
  },
  {
    name: 'wallet-1731277116-558',
    address: 'agoric1l065ukrrrre9kuwkdk8fywd0ysndl9fgtvu6cp',
    pubkey: { key: 'AwtWFdiE0M1gbRsxaTsQPGp8fw2kRH6C9K6WaRinPWiK' },
  },
  {
    name: 'wallet-1731277116-559',
    address: 'agoric1kauhpjgyshhk7k48tyd0wzyalu5gwx5sfcgqrc',
    pubkey: { key: 'A/kVH1Xkkp2GIFYOF7LXiZA5R9jis0mgFMhPUZpn5FT3' },
  },
  {
    name: 'wallet-1731277116-56',
    address: 'agoric1gv62yn35whmhceky7rxhv7gas2cg2n77vkckjw',
    pubkey: { key: 'Am+zeREWfnejPZtYy/WLb/zXQDL475KGtyGQVJALup6l' },
  },
  {
    name: 'wallet-1731277116-560',
    address: 'agoric19qkqtflup5q26gwhrnmyp76az7c9cex9qk8lp5',
    pubkey: { key: 'A2Qu006w7l+HTdLSPtasbRH+z5BYyTC/ax8hymI+e7Lh' },
  },
  {
    name: 'wallet-1731277116-561',
    address: 'agoric1qtm492wjh7y7wg86yag9q26v3fqznp9xv3u4qr',
    pubkey: { key: 'AyEt4K5BtWjbGuv7mNqh7uTTPqTJ2xcyuNuESbSQTG+X' },
  },
  {
    name: 'wallet-1731277116-562',
    address: 'agoric1k4s5fu9ers8s4vldt5sa2pt3yp5etqqqtwt4st',
    pubkey: { key: 'A4130rNZEOJGOPiEDayj+8rIbGPxPyOq5hDGpEe6EB+P' },
  },
  {
    name: 'wallet-1731277116-563',
    address: 'agoric1jpf377qkes0s703xsz9ztk4sruxcms4nm2mwyh',
    pubkey: { key: 'A6ywwz3AQjW1A4coQkcamGE/0U5O5F/GqXMxbIDHHsTe' },
  },
  {
    name: 'wallet-1731277116-564',
    address: 'agoric1u03sf7pwg9kkn86vvguxdrh6v0gm3d55shm5nj',
    pubkey: { key: 'A99rFKPI23L/kSzSpy9isN+3JKQ3O4uIxCaiMYuUFhzD' },
  },
  {
    name: 'wallet-1731277116-565',
    address: 'agoric16ex5j9fftpuadgxmzmpw6y8yzuv2jlewn5hn43',
    pubkey: { key: 'A052F5E3+50Qk9R+hXUgFiH2ABioTPMSHeXCbpFnQ5f8' },
  },
  {
    name: 'wallet-1731277116-566',
    address: 'agoric1telzmqr2f20ve3wewa58zr46uh50xv6lydntp3',
    pubkey: { key: 'A0x6JqKOkbJmcv4Cvk4JrnNDgViADUYp8zc3KcM284V7' },
  },
  {
    name: 'wallet-1731277116-567',
    address: 'agoric15vluctm3zm0u8ruaq8sqcukwms6etcylhre4v7',
    pubkey: { key: 'A2E1iCRDoyZ7/1tLirCXfT9xYT5T6APCzQhHlqNI0kq5' },
  },
  {
    name: 'wallet-1731277116-568',
    address: 'agoric18s3xwps5wfn697t7ufgr0vmrucgnf5qne036uw',
    pubkey: { key: 'AxWW+s7SJrgO7po9iZV+9YSjzvaGr+SZqZ6OMdY5c9bU' },
  },
  {
    name: 'wallet-1731277116-569',
    address: 'agoric1z50gc4lpvxpe0rz286252v58e2q0zgy34aenx4',
    pubkey: { key: 'A/x0KtGFpt1PmX4IYWjcoIyqcSBdd2quOeaOozLSxEPc' },
  },
  {
    name: 'wallet-1731277116-57',
    address: 'agoric1w6c4yekudy0rzyr5xjf4hws8s26mpmptrn8slk',
    pubkey: { key: 'A1St7UxhQrtKL9hBZDkRPsPgwBMe5Wg9k+QsAfyzW1DK' },
  },
  {
    name: 'wallet-1731277116-570',
    address: 'agoric1gg52ax5dxtfz8lqxdx34ynr7m5j7gffcugs5up',
    pubkey: { key: 'A+44fNuwG1U+3CYJSm2MLNSzoeQ6gs/WhM+j+CrZxcGH' },
  },
  {
    name: 'wallet-1731277116-571',
    address: 'agoric1l2vdvvw2ayprp2zxu8jhtqryww4hcp6zq4tggl',
    pubkey: { key: 'A1W5qWIr0TMjW83ZpFtr3NeFj0n6Lhn7mqrRzd4cYTwy' },
  },
  {
    name: 'wallet-1731277116-572',
    address: 'agoric1w2hlwk6lqws7kzz5d8nzqvshyfcwvchy6rm8e3',
    pubkey: { key: 'A+dv4wNyirqIssE+OjkGuaf1sjlJH8gCrDKju5JSlx+H' },
  },
  {
    name: 'wallet-1731277116-573',
    address: 'agoric1pvyywkxl5d446p3nwycqeylkxffpv2zg432utz',
    pubkey: { key: 'A0YIdzcnAZEbBrE5vj0qkJucz4TCKC/w5pH4Eig9Glsq' },
  },
  {
    name: 'wallet-1731277116-574',
    address: 'agoric1qsrx9lz54lkvx7uqck47ey0vg5tuy84ec7ekmq',
    pubkey: { key: 'Auyx1NpPRN+DAKtj2n/OVDqbX3kQ+4AoVeWv7XolYaoJ' },
  },
  {
    name: 'wallet-1731277116-575',
    address: 'agoric1qd2k8hr2y0ug9xr47zdzmq3w0etgrlltzr6j46',
    pubkey: { key: 'ArtHWd8FP2zOfK55JU1MOA2AQMJ+fVG8woMFn5P0N9Dw' },
  },
  {
    name: 'wallet-1731277116-576',
    address: 'agoric147fk0ekvmz2hgrrvjdkv65rh8vhn732txttzlp',
    pubkey: { key: 'AhsMPs6/eqTdNdVZauiN/quDONZKO5w7P4U4gSzbqsoJ' },
  },
  {
    name: 'wallet-1731277116-577',
    address: 'agoric132xhpguue37shysmcdn9we7dvkf24l5ee65ww9',
    pubkey: { key: 'A7Jw46eOqkj2rKFuuaHndaaSiaxFJkzbCdldMxMFNKAd' },
  },
  {
    name: 'wallet-1731277116-578',
    address: 'agoric1ryp4eph6cuxcsn054zyysupk6acn2d8pq88e75',
    pubkey: { key: 'AuLOUZYuHMQ7RPDOXaXDp/Ef7H7exv8i30xnob2Zb1Oq' },
  },
  {
    name: 'wallet-1731277116-579',
    address: 'agoric1facplh2wnnack8djuquedpgx72sazs36kdsg6m',
    pubkey: { key: 'AyKm3s9ax0XzpFTPROuY//ZYP0LIfgK/1wu1clUgB7cX' },
  },
  {
    name: 'wallet-1731277116-58',
    address: 'agoric1kpzl42hac8psqh9eg9tgenvc8v4fw34v8mp6yy',
    pubkey: { key: 'A0c0kfNt23XKwplydzDUdkcnUyfjZNM9d+VxQsOefKsq' },
  },
  {
    name: 'wallet-1731277116-580',
    address: 'agoric159ejhug0x0ywk562g7japwt5n5ndasvarnvguv',
    pubkey: { key: 'AxLIU7mCmtgp/waCLh2gA2Ntry0dt37XQ8XJmvpbKWwM' },
  },
  {
    name: 'wallet-1731277116-581',
    address: 'agoric1ka7nf058drts6y954eyeqq7zpvnl80g4jn22qr',
    pubkey: { key: 'Aw10i3/zED6aLbDPRQNoXNVmQZykQFjVUO7gWBjeiedY' },
  },
  {
    name: 'wallet-1731277116-582',
    address: 'agoric10tl9nrr3r8wu86rfqhf8tvkyyzklyx6qcj58hm',
    pubkey: { key: 'A8RQBAOKx5TkXrW/YKurmBohs3dd/5nGJxHNrXy5nK1o' },
  },
  {
    name: 'wallet-1731277116-583',
    address: 'agoric130sdjz8m9eals5g70xcqas9suujaumwngzcqtm',
    pubkey: { key: 'A6rrbbUqnwxfQlg7BGlkLLzFIRlO04iuEv3EKxvwdd9G' },
  },
  {
    name: 'wallet-1731277116-584',
    address: 'agoric1wkty78rtldpxgky3900zxepx8k3axx9zh54vqw',
    pubkey: { key: 'A70+b2XBbmtinoTv+7391VwAj1e7V+IxeITaZ+Th7Hfr' },
  },
  {
    name: 'wallet-1731277116-585',
    address: 'agoric1dgtzyytjc6peglej37d9dkd5pwf0s63m89upvy',
    pubkey: { key: 'AuwhOotHzvy+i4I4yENdLSoJiHqmiiyqxLamG4EhuREL' },
  },
  {
    name: 'wallet-1731277116-586',
    address: 'agoric1g5x32xcdldt9nj6eje55mvqu3g05ar56dx40y5',
    pubkey: { key: 'Au/hpPDSoMDg4I9TtdfbIhUCaiO5dH2/FiY5U7DxXOC+' },
  },
  {
    name: 'wallet-1731277116-587',
    address: 'agoric15sunc78u3gvq528tjakvd5h50c4j59sj5rz26f',
    pubkey: { key: 'AoqEeY/YxwxP5FXYkheNgdhfXbp01GGTOug4dS7pL9Fb' },
  },
  {
    name: 'wallet-1731277116-588',
    address: 'agoric1cjpezxxm4lmhkja08rxnw6kzylay3h3l5lz4kg',
    pubkey: { key: 'A+NIwStBijkBV28GCQNVZk6a6oOSu4MQzANWMtZnk3PQ' },
  },
  {
    name: 'wallet-1731277116-589',
    address: 'agoric1290p8k0g8w53ct3mukssuvz86hfwew8nakawxt',
    pubkey: { key: 'As/akVrn9S5iQkHYvqcOY2DJ7uLlgt5gNJuX4K7l1hbF' },
  },
  {
    name: 'wallet-1731277116-59',
    address: 'agoric12pnwkq8n2mvymy8qvr9zn5g4tmjk062j0yln20',
    pubkey: { key: 'AhqSk5n+KGeL6JDz3uRGd2iSsbs/C4iUnzlln4SsxMbZ' },
  },
  {
    name: 'wallet-1731277116-590',
    address: 'agoric17pyeefvss257xlg7j8hxlfa0kvmg9urhdex04x',
    pubkey: { key: 'A9ElHO1boBGL9Semx/yBQeZV5gKzU41ahjJ2Wrf8wab0' },
  },
  {
    name: 'wallet-1731277116-591',
    address: 'agoric1sltk0q3p8nkywyvamtvn244hhra02xgf6ed880',
    pubkey: { key: 'AuwzFalbauM0szp47IJTmnbRZMdnc2q0sToEdYAh/L9L' },
  },
  {
    name: 'wallet-1731277116-592',
    address: 'agoric1y0ecj48y46x8yvsn50umv26p7a0qgtwf02wj9x',
    pubkey: { key: 'A8q9qDhu5doQPMnddS90V3CJH7slgCnji84BJbsENSsK' },
  },
  {
    name: 'wallet-1731277116-593',
    address: 'agoric1n3lkl8ly4clehn2jcsmnp4r3jrj5yl09ll4dqg',
    pubkey: { key: 'Ak42uYYbOCuCMLQfWzgFtHnqVQ2rf7sBQ1Sm6nwFZcSG' },
  },
  {
    name: 'wallet-1731277116-594',
    address: 'agoric13f9ttdk9k6adnck65fwhnkhxeka74j0fe9hhcz',
    pubkey: { key: 'A83SOwRCMqySyavr5H/K5xRAgrI6c9+PxpZDkEZxz4ZH' },
  },
  {
    name: 'wallet-1731277116-595',
    address: 'agoric1g9fj2telfw8j323trx2lcus4c0jutrcsqxy46v',
    pubkey: { key: 'A8FXjWkh/Z5N+TRCJcgGLFjXTQN28JVg6y4HB34efbYs' },
  },
  {
    name: 'wallet-1731277116-596',
    address: 'agoric1lk9hwd6ez4v983mmmzj3k2sq35vw0e0ylfly0u',
    pubkey: { key: 'AvAcW+kKY8hnDHtJz4XwF84a3vXpMk+stbYopfgEVtnF' },
  },
  {
    name: 'wallet-1731277116-597',
    address: 'agoric1zx6tts7ev9prq9r30alsrdmcwdzapg8k75aurn',
    pubkey: { key: 'AqqGAdNwz6l1+O+DG/IgENYyetZGTAHYW6QUN45rarud' },
  },
  {
    name: 'wallet-1731277116-598',
    address: 'agoric1ts2rumj3m22urg6gj2jy5k8hgthufw94wq6r0h',
    pubkey: { key: 'A7SltYWpytRimZDOR8zenpFQocqN0vrCfVfP0c7a5G+Y' },
  },
  {
    name: 'wallet-1731277116-599',
    address: 'agoric1r89xtpdg3pljjv90a89achktla43pcyns8kk4s',
    pubkey: { key: 'ArRSWRjY+mvNWZ+x1qFGIL3RX0HOtBi0N8eRZRTvA1iN' },
  },
  {
    name: 'wallet-1731277116-6',
    address: 'agoric1s76tmnvcrxjvwxng7gdh9vgewre5kafdlqdryn',
    pubkey: { key: 'A/jJvVOyO2uB4206xaU8QmAPodJZsIVsdV9Dg7iuq9AU' },
  },
  {
    name: 'wallet-1731277116-60',
    address: 'agoric1w8ptf03klpkhscrk486e8qj4ajrz9mgapr2z93',
    pubkey: { key: 'A2gr9UwYP7KWDpucoGHRmszSYUYkF5rFqSiCtH3x94an' },
  },
  {
    name: 'wallet-1731277116-600',
    address: 'agoric1qzg56242pz5tnumma9tf0y37unze0z2rw3w4yf',
    pubkey: { key: 'As9nlu0wG/RX0PnoZhKu5z/RdwHHzSoOSaa3xb5p+flu' },
  },
  {
    name: 'wallet-1731277116-601',
    address: 'agoric1nv0pvf67ypj29xpp097cvu6m88gh4ausx9mle9',
    pubkey: { key: 'A11QQA2wmmhxgU/LAdeMcK9W08607d6DK2IJLxoFEK6P' },
  },
  {
    name: 'wallet-1731277116-602',
    address: 'agoric1gdyhzvn0j8c0yh7l75cx8smdwamd5n2s0smxg8',
    pubkey: { key: 'AsciXYuCKBi40uHj04ny7l5I/oxzo9gMaazqhKWfl/W+' },
  },
  {
    name: 'wallet-1731277116-603',
    address: 'agoric1vkh92h98zxpjw6a8pa9de34rf4d2pneh9v28a6',
    pubkey: { key: 'A0e/sacRGzw98h7O2FopWf7e0y8SOd2UcPAXJzr+5Wki' },
  },
  {
    name: 'wallet-1731277116-604',
    address: 'agoric1sfwg4tughdeudcs53r2r3a99alrpjgcnwpfphu',
    pubkey: { key: 'A3gJYnNDXumQ2lm16TsbP/xkuZqj7cRYDJlaX8tpbdtY' },
  },
  {
    name: 'wallet-1731277116-605',
    address: 'agoric1p5zntvgnawrpu69mnk8f4v4l3ft2zmd9xlpgag',
    pubkey: { key: 'A64fx5skdzI+n7bCik7dECVVHQY7Mq4N7lOu01iZHD0V' },
  },
  {
    name: 'wallet-1731277116-606',
    address: 'agoric1hfmxm96guwettrejwpd0dmrz6pry93jk705z4v',
    pubkey: { key: 'A9C5RwSFbcU8WLJ+xG/F1y8nGhH5dh9UgVzabjkffRRv' },
  },
  {
    name: 'wallet-1731277116-607',
    address: 'agoric10y8xdnc8h988j9hu8psdegehap78ldkg8fqpjw',
    pubkey: { key: 'AqN9yQi7+5Bg5jSUVRo1iAl8Oi45dnaiyHvYwkPoZGgq' },
  },
  {
    name: 'wallet-1731277116-608',
    address: 'agoric1njcuae797tymquwmqz86maygks67q75u0q0nhm',
    pubkey: { key: 'AuJpS7Mr8S3Is3smz9v5qR47/qwP8RP/IdV3IYdTlUez' },
  },
  {
    name: 'wallet-1731277116-609',
    address: 'agoric16ft8xwxavagdhc9ezu32hrlrtw0cs59mg7jypu',
    pubkey: { key: 'AnuatFmlLPrPinML03zbjTSPGdoXJFru9BKz+Npdfy7Q' },
  },
  {
    name: 'wallet-1731277116-61',
    address: 'agoric1srjt3ujmqeehky39m4ng9a39h0t74dlcx58tsd',
    pubkey: { key: 'AgP34Jba6N0DXasWqjiWcl8l5m9rJsL6iem7pDp+kfw2' },
  },
  {
    name: 'wallet-1731277116-610',
    address: 'agoric1nhrgu9kay8c4kssqq8mrvvg9valycmll6dh3dh',
    pubkey: { key: 'A1vGsdPOPer2S3Iy2rl9KAYJDuvNFf6MFlht1y1QeVbQ' },
  },
  {
    name: 'wallet-1731277116-611',
    address: 'agoric1qhtvcx5fem5tqj4nnws8hup0f7rg89hut3mpxj',
    pubkey: { key: 'Awc1Y6zIXDPHR/4MvjpgwqV8nNVj2ncRdP1QAly0v45I' },
  },
  {
    name: 'wallet-1731277116-612',
    address: 'agoric14q3cept7p33xfslkf9r3lckn453mkx5954p2rf',
    pubkey: { key: 'A4L8HgdCkq5NXmc8dIjTq4GCeHS+paULaETw2/J5Z8yg' },
  },
  {
    name: 'wallet-1731277116-613',
    address: 'agoric1tejuqxlczpyeks07hq8uy7jgtju855ja3e5vkj',
    pubkey: { key: 'A1+xQUSPq7a4HMRHXm08MC7SEDoR1AGvimTglCkb5KLC' },
  },
  {
    name: 'wallet-1731277116-614',
    address: 'agoric1ckwlmed45cyjf32gyca83wpf06s79vw7uc46nj',
    pubkey: { key: 'A4x44UF/UewOTpZZxAXpdQitNNavaV3tuxIl2coAa6yj' },
  },
  {
    name: 'wallet-1731277116-615',
    address: 'agoric1hvqafhrfjxjsdr6t5y6tmvh9vvvqewxsh9s72c',
    pubkey: { key: 'A4+qYeWpb/wW6fiR21Pya7F01Wp+x8x04jql8ByfU8R4' },
  },
  {
    name: 'wallet-1731277116-616',
    address: 'agoric1gt5dl5yr22p3jq83qum39wkz0au2r3qvav4js3',
    pubkey: { key: 'Akv7qX+OrSJU139ww+2TB0WSBv6n9YI2S2y93DWHDMoc' },
  },
  {
    name: 'wallet-1731277116-617',
    address: 'agoric1vf2huc5r7w7czzy8tvgk6uqc055pax0mmz0xxq',
    pubkey: { key: 'A7byyywjpI36dtt/yQG03UykzPZ3uMZej+snaVc8r9/k' },
  },
  {
    name: 'wallet-1731277116-618',
    address: 'agoric1y50ddc33tux3p06r7ud3jqr5nu4emc5v64jpmd',
    pubkey: { key: 'AxJc3AGdk1snwY24UnKRWz6o6JkjBLFm+HhcmJbUzgGw' },
  },
  {
    name: 'wallet-1731277116-619',
    address: 'agoric16zzsx7fhfdm493jkcpsq2lms9zv3fwcjxmszc9',
    pubkey: { key: 'A70WsRhzwaRdDZyLkSkvT6No5F80mkyppnSbenIl5nlc' },
  },
  {
    name: 'wallet-1731277116-62',
    address: 'agoric1pnuwunt8gnptylzhx2y3x39scycglr6v3sjyrx',
    pubkey: { key: 'AnO+NCA3qsnqLqLSM5Tl1zAHKOir7+N6ku/40cWteKeX' },
  },
  {
    name: 'wallet-1731277116-620',
    address: 'agoric1vxeskjwuh75yupl8wz0dx3q677vjxysnvsjm9p',
    pubkey: { key: 'A+L4Bm4ZDUuni3zHMbznwWDaGr0rqrwmSUq1R8gLj+nH' },
  },
  {
    name: 'wallet-1731277116-621',
    address: 'agoric1e4087jv2yt288augnj5fpc6ezpnekdggqqthc7',
    pubkey: { key: 'Awa79Pnsn4MM+8FrGDHIWG56wqbAVi3oKDIF3J/t0wAN' },
  },
  {
    name: 'wallet-1731277116-622',
    address: 'agoric1w7eeegprcnz4a3q7p9mm8rlh0f4m4gqzpmtgf5',
    pubkey: { key: 'AwGDYhsQ0DWIHwf9c8yNkhX8y9yCLYVIgVSkfc/EEmZ4' },
  },
  {
    name: 'wallet-1731277116-623',
    address: 'agoric1u7tkmzcng8rwcfw8cezv0uqftl7s5lrc0n2x8g',
    pubkey: { key: 'AzAMD0f1IPu2Hvfd3yDYQRomztcThgXAz3DmYeHXKHHN' },
  },
  {
    name: 'wallet-1731277116-624',
    address: 'agoric1mzj3vjechxf30p9f65ane0jkrcg7fzdafzu6cy',
    pubkey: { key: 'A4+wCMAnM2nyImUAwf/t5s3zM76HrYDB6S63zXzI3FS8' },
  },
  {
    name: 'wallet-1731277116-625',
    address: 'agoric12ywf898vvf5mv3gtzzhpc60qwnx5n575c4t0ej',
    pubkey: { key: 'AnJ6cFntjRRLe/+kDWT3bAIyoflUJDi9rS/yPYnYL7w4' },
  },
  {
    name: 'wallet-1731277116-626',
    address: 'agoric1rnysstk26ca8p0a868vutakklvymfz3evr8r66',
    pubkey: { key: 'A0ZEJyLapnmSgEQ/A+Xw6xjQj6i4WH8YhhMV//HNOBo7' },
  },
  {
    name: 'wallet-1731277116-627',
    address: 'agoric1xc75zpx9s28f20tkjzvjl7yf0yhhx29es70fyq',
    pubkey: { key: 'AjG246nbwHJMjeFIl4EYweFmdvgJibfV6FP1dH3bOf+I' },
  },
  {
    name: 'wallet-1731277116-628',
    address: 'agoric1x0e92ranp8tca3tgnamxmzec2mj8kk8ycpf7s2',
    pubkey: { key: 'AvixDdCfwIvMOtnPkq1Nc+KTDDggLUkPVbO4hbTO6Tuj' },
  },
  {
    name: 'wallet-1731277116-629',
    address: 'agoric1emrzp87ked7kxu7kyfphrq6uhl7vjq6fuhjg7h',
    pubkey: { key: 'AnHv/uaLnYYc1kINUnxHBvgln3P/9oOG5Wxgepy1j7BB' },
  },
  {
    name: 'wallet-1731277116-63',
    address: 'agoric1wap8utnlnmw29am2h6j9hrm6u3h7ufdd6awf8z',
    pubkey: { key: 'Ahc2kEiBfClZzSCyeUSRnvdtsJguL5oSpGf3z86I4ND9' },
  },
  {
    name: 'wallet-1731277116-630',
    address: 'agoric1wcdl82xkh9c0taz9rdaw7dv64y3660gjdysvkx',
    pubkey: { key: 'ArYkvJ2nPqJOTk8LqER17flQGa1SeLT4q1yCwQOf/el9' },
  },
  {
    name: 'wallet-1731277116-631',
    address: 'agoric19zyk5ed8pq0n6m0tmuzx2dc684yhd9755atc0l',
    pubkey: { key: 'A6Q7+2NDQFBY90KwvxtQTAms4yJiRdXq1uEhhG+wDMuQ' },
  },
  {
    name: 'wallet-1731277116-632',
    address: 'agoric1zpaaj2f7txjsyp8m2m2wpt3p7z04uj5wq8rqmq',
    pubkey: { key: 'Aj9nFwDVbcxkPLSyScnUN1P+ugfs/KEBXtzHNSDiVyuu' },
  },
  {
    name: 'wallet-1731277116-633',
    address: 'agoric1ctpulrtzh5mu5xxnhjut6tuznzzgecvrse0pmu',
    pubkey: { key: 'A9NVdq+4NRPI2TW4Vo7/NHGRR74VSe3TTCpNIDmbXUNJ' },
  },
  {
    name: 'wallet-1731277116-634',
    address: 'agoric1uw5gcrqve2gawpepsacdlym9fj4v3czlcse2xx',
    pubkey: { key: 'AjIXKVz2RRotan0QBzLElqS4vbsxc3GGAD0tP3xU3v3b' },
  },
  {
    name: 'wallet-1731277116-635',
    address: 'agoric1rykw4qq7s0hp0fegmw8rhyweq2wkthggjwh0gk',
    pubkey: { key: 'A6wnEY8UJvuDZsLe+pQv5ISiO6QYCoyJkBPOefmWkSXe' },
  },
  {
    name: 'wallet-1731277116-636',
    address: 'agoric19mph4zqszn0zgxaz6fj8h8uzzqycvkcn8a4m27',
    pubkey: { key: 'A7j9A1b+0z6k5RYVLfRHe1tbAq/GTUQ9FS5ITWaC0EJa' },
  },
  {
    name: 'wallet-1731277116-637',
    address: 'agoric106yzfrah7zejggmvkmdp9f7keppmfknznegeav',
    pubkey: { key: 'AvOTcaWloGMQ/Fv4RaiZZOTAN6T4xkB1owiVM3ENFNUQ' },
  },
  {
    name: 'wallet-1731277116-638',
    address: 'agoric1k0c8fmxgfmrcz48p5s65354z8msykr7a3c58lu',
    pubkey: { key: 'A4CHsKXhv9kPgISZVVYrDsNMz5Ohlj0CKse6vfzsjeED' },
  },
  {
    name: 'wallet-1731277116-639',
    address: 'agoric1qra89t7jd6rv37swppd74mscfg9vl0evfffk6l',
    pubkey: { key: 'A6eqCBbBZgVDi9Q6dxaYndier6lQACIqAB/Y+/+i902q' },
  },
  {
    name: 'wallet-1731277116-64',
    address: 'agoric1wv7sjjner9jj02ufqzejyas4fa5cdh3h04ck85',
    pubkey: { key: 'A+jFtFcSE5Luc2EKp7dAPArEd7A9EP3rpJP0xfV+sRWC' },
  },
  {
    name: 'wallet-1731277116-640',
    address: 'agoric1dky0sgemeqshs63q4lqzzqggdjm4hfhqmtsh5c',
    pubkey: { key: 'AlCum3/yI0xAqo3fEv1109Hf5olmp8xfOsZov5Aneqwe' },
  },
  {
    name: 'wallet-1731277116-641',
    address: 'agoric1rxfl8tdyh0ll5e39p93tkukjr5j8ff7mpd3cqr',
    pubkey: { key: 'Ao9g5V6bkM8v0S5+RyhO0cZcmObXPOq8z45cdf4Zp414' },
  },
  {
    name: 'wallet-1731277116-642',
    address: 'agoric1yf9yqerspx457yvlt34ymklyaclh89xsawn8k8',
    pubkey: { key: 'A79sFbsmwFKPfwOVxW35yTQHvYdoGfUCHGnMctu0YZDT' },
  },
  {
    name: 'wallet-1731277116-643',
    address: 'agoric1prqp754vkxdcchtsje0q37hue67mx7jq0zjkrx',
    pubkey: { key: 'ApiwMG8tfTmshWIuPDtbJA0IQuZAMhPP934Ok7mBIK4u' },
  },
  {
    name: 'wallet-1731277116-644',
    address: 'agoric1032gaq5cnul8x5dmz645wfjmy5ds4fz36pfaqk',
    pubkey: { key: 'A4v8Wfnj/Y5t/epve8IVQL/oT+W13oj9RVr1Ylb9xT5R' },
  },
  {
    name: 'wallet-1731277116-645',
    address: 'agoric1w54sn5n7kqud2ha4dl0k68gwg59mzvp0dlsczl',
    pubkey: { key: 'ArIURJmjxfVNqFvNF/7tZVvO3mVfnqjM0lLpwNPybXGA' },
  },
  {
    name: 'wallet-1731277116-646',
    address: 'agoric1cqs9zrylxnxxt8upkgcl8kydtp4uz4wqk259mz',
    pubkey: { key: 'AsMTqN3Z4iWHdf+3g4FVTeOL9xTGUrzgITAOWvjYzwrk' },
  },
  {
    name: 'wallet-1731277116-647',
    address: 'agoric1h7lhy9xvtsv9wjmum844ld6a0lxkdhsznknhr7',
    pubkey: { key: 'AqLucftypVjok4ZY1I5vLRHFI/vJf3NSahKO347V9G5U' },
  },
  {
    name: 'wallet-1731277116-648',
    address: 'agoric18tsu958c3vvd6c9d8l0g3860q3arp29jglpddl',
    pubkey: { key: 'Ao7fEiRz7tmZskcvCRP7vgrADhFnDmvCxH/VRP/qAPTT' },
  },
  {
    name: 'wallet-1731277116-649',
    address: 'agoric17mstu5qtvvj9609dlnzztp4a45pp7njtfwr3pz',
    pubkey: { key: 'AxfhCHcPBNlDuoqjmAJnCkuZbDPEAFvaORSqX4Hoshtg' },
  },
  {
    name: 'wallet-1731277116-65',
    address: 'agoric1gv7dm4t8cduedqtjh4g8p6ffvq52cjl2lnqqru',
    pubkey: { key: 'AsZMqtFPbttZvxIgKZ2A8v9eJXdw3KpzjmQoOySd2suE' },
  },
  {
    name: 'wallet-1731277116-650',
    address: 'agoric1ztc08hwu2m0tqtzxn6gm3nujs2emm4p84l0s09',
    pubkey: { key: 'AwKz1BKXTaeNjrCQc/0mIJ/OCm740VGdktiJwrvJT/bY' },
  },
  {
    name: 'wallet-1731277116-651',
    address: 'agoric1h9f2jwhncqj3lcs2c0wcsz5klraps9ywkjey2m',
    pubkey: { key: 'AxaS95sN3JdRBmnDJ5EMM/huFJ+0Y6pn1J1IpW5gGkLX' },
  },
  {
    name: 'wallet-1731277116-652',
    address: 'agoric1dyxskqyafuj3jnr9dfwlph304psx2jry7ae3ng',
    pubkey: { key: 'A/48Gkj/fK14jY6xG8cq71+FjIpse4KuQV9bNkGgcSsX' },
  },
  {
    name: 'wallet-1731277116-653',
    address: 'agoric1m33jx3g03m40qa0qltde8a7ulzrtxg7kx66yfw',
    pubkey: { key: 'A5H3r151ONsehPyQFE41fezQTcT3ih7gnTGPD9Nw8ERL' },
  },
  {
    name: 'wallet-1731277116-654',
    address: 'agoric1jdqtyvp2rp55re6gyngsnvfjwrfq32lgjqd0k9',
    pubkey: { key: 'ArvjHYtaJxswEPFIT+qT8ML+ilc6M6kvZOy5ODSXJfOS' },
  },
  {
    name: 'wallet-1731277116-655',
    address: 'agoric1nccwkc6edcdwk5kcgk7htgpsw408sugn4elxvh',
    pubkey: { key: 'A5O4HRdECpflXvMZlDNudfSywfFiuWkidRY/5Qy5C6F+' },
  },
  {
    name: 'wallet-1731277116-656',
    address: 'agoric16x0umd9xl3fepe2sjcm2cppj4f82lktsw7f8pa',
    pubkey: { key: 'AxyO6cRJp9UQ/2i2OeTOhIccz/hRCkfxFxb6345zWIgN' },
  },
  {
    name: 'wallet-1731277116-657',
    address: 'agoric1n49wtcafrjry35x0uchxk90fj8u0xvzvgz6g9r',
    pubkey: { key: 'AjCrVltkoW0YL4aAZCH5Sb5Evkhoxv+Nf2O4nVS68Nft' },
  },
  {
    name: 'wallet-1731277116-658',
    address: 'agoric1sg64skt0jvjeuk83vrgc4y6amggtydgss0xmgl',
    pubkey: { key: 'AxMztm5/BoWIib2Sk5r149Nju1QnkXsnLPRdBwG4KDLX' },
  },
  {
    name: 'wallet-1731277116-659',
    address: 'agoric1pc0rswa00ph677lvk9yfstqpzusvz2l959x4ye',
    pubkey: { key: 'ArgUr54LFyVfAfps/oCu2nycIlYnHsRF/+0OM+p/BEmE' },
  },
  {
    name: 'wallet-1731277116-66',
    address: 'agoric16h5kzaf0rhh4usx3pj4ywe7zwrtsrztsgpsyhh',
    pubkey: { key: 'AqAjb3t8vzXY+/NsAHSJ3cdGsAxHAzKqaoTGGQVf7D8/' },
  },
  {
    name: 'wallet-1731277116-660',
    address: 'agoric1wl4vltuahwqhzta442l72h26mw0eag9rlcpgs4',
    pubkey: { key: 'A1E92p9+fc/vjLvunUhN8ZDuvgxEYdVOfckdE6PL7uAj' },
  },
  {
    name: 'wallet-1731277116-661',
    address: 'agoric13xxtxyx2qrvhgxyw4caklwnrllmps0tdftg5ce',
    pubkey: { key: 'Airlg35fUoCuDTTTPF3YYA2HnRIucrxMaoLx1FAsvV7q' },
  },
  {
    name: 'wallet-1731277116-662',
    address: 'agoric1z6vmpuspret6k328cn90a5prvt4nrat59qr5g2',
    pubkey: { key: 'Ajcs6dhTiB6FpyxQEDQa/yWxpG+7JiaOGWfTu7hwYTfk' },
  },
  {
    name: 'wallet-1731277116-663',
    address: 'agoric1qrd3s0d7npj6fqrtcc0wupfjzxv87s66j5vmep',
    pubkey: { key: 'ApBOnNz/CPWKey7yvL+foAnxIYGeUX3tXOJpVfImg925' },
  },
  {
    name: 'wallet-1731277116-664',
    address: 'agoric1tnd2zt5dq8luz3r64s8u02u9ru7eplgldqzzel',
    pubkey: { key: 'AnQZuEJOleUPL/lQ0CG8+zxUGbtS9MX2S5oQwsv/vmMz' },
  },
  {
    name: 'wallet-1731277116-665',
    address: 'agoric15ausjz3ajwtqhh6jy5z7maj3symnmvlg09x8cn',
    pubkey: { key: 'A1LxkhIriNdB1YbXPiqHNtAmqAJ7GeyWTYVnCbHJmp88' },
  },
  {
    name: 'wallet-1731277116-666',
    address: 'agoric15sv7qj29q90edfz487u9uew8y878awf9wyukgr',
    pubkey: { key: 'Ayb6CSZ6G7OL0lAme92Rdrs1CjOs1wG75wcuINLFg7u/' },
  },
  {
    name: 'wallet-1731277116-667',
    address: 'agoric1l62znll47ylqgpp5mg5n4pvhng25aptl55rtsj',
    pubkey: { key: 'AkgN6Yw3pJD6R1BueVI93vYoSy1qmJGBd1qG45CL4AWU' },
  },
  {
    name: 'wallet-1731277116-668',
    address: 'agoric1npw57guw83ak6h6d44e4e3x06vjyjapx0zwepf',
    pubkey: { key: 'A+VAb9pLdpomApb4siGs3D6uhh6seGVqcD11yniVFQpo' },
  },
  {
    name: 'wallet-1731277116-669',
    address: 'agoric14l3rdv5umelgcm6vx558gph96hr604z4elar00',
    pubkey: { key: 'A7TRbiWmuo4BcGhMWzQ0DH5bfmdb/xxCT9TJ+x7OIc2t' },
  },
  {
    name: 'wallet-1731277116-67',
    address: 'agoric16jaf5sdhufn9dxkx3reffnpmmx8a3jfhu9q855',
    pubkey: { key: 'ApVAcGPhiuPsUWqz59t15Ziu+A5pUlsewm9dYZnCrdbI' },
  },
  {
    name: 'wallet-1731277116-670',
    address: 'agoric1v7amq0rj0txry3lj0stvu7szyv8eewvuwvaltr',
    pubkey: { key: 'AoV3ABDSHZSTidoEQQN3SxDhZ8ytDyISTfrNeG1km32t' },
  },
  {
    name: 'wallet-1731277116-671',
    address: 'agoric1y7gmdzpt6kzwn6etk2t9hnt5lerlezekafh0dm',
    pubkey: { key: 'AkeMukGUPebXZ5hdmYML/sbxW7ZYn3iJceOmECYcgTSS' },
  },
  {
    name: 'wallet-1731277116-672',
    address: 'agoric1xq7w5tnxl4reaa9htwn6kl2v8qtuwhzetl07vx',
    pubkey: { key: 'AtRkWpirf5cQFzDGUPJIDmhX+4koM57se+RvaVLj5kDl' },
  },
  {
    name: 'wallet-1731277116-673',
    address: 'agoric13tsk7vwr4uzf7kdd7nz4plm0r8yu7tqpc6qsdm',
    pubkey: { key: 'AlDwPzU5wv81MvPnwWBkZjswqjAfebIN5McwYSvNAOzq' },
  },
  {
    name: 'wallet-1731277116-674',
    address: 'agoric1nmcl28k6zqcae0re8rnn7a95szhdw4t2cewctk',
    pubkey: { key: 'A6R6GNMkVv2typjL9gA0OGbxohGLgLEiCkYcBVIhJ5NP' },
  },
  {
    name: 'wallet-1731277116-675',
    address: 'agoric1g8ruq2n9y7l5exp0ymw0nx6kezpqah99surmc5',
    pubkey: { key: 'AuWfWOyaX3LxPd39y9K7WvFYyJDyZzDNZKEu982x3Nl/' },
  },
  {
    name: 'wallet-1731277116-676',
    address: 'agoric1vj3928kvftp9wp9m8q0kn7a0m8apm6qhfa60hy',
    pubkey: { key: 'A6iXps9KueKOUDZ6C1QDz0A1pu2R8iVG+GbrYy2wGBwL' },
  },
  {
    name: 'wallet-1731277116-677',
    address: 'agoric1khrllwkmy6taa0q4wvnd239kavqc70fdc9zkjm',
    pubkey: { key: 'A303aopuGPiabdX56LVizAx0sf7qysE/lD+3cdEk2OuV' },
  },
  {
    name: 'wallet-1731277116-678',
    address: 'agoric13nrhp8f5thne8r5x4sev5av2szzmy3m8fanqmc',
    pubkey: { key: 'A35teUdVdIpfh4zP/OPF41Jsco7JL++UrwOI8YWeMaF+' },
  },
  {
    name: 'wallet-1731277116-679',
    address: 'agoric1jsp8fthjtzkx7984vscks30gznln64642lqh42',
    pubkey: { key: 'AnxpeAs5ZlCzgITapENIp6txkZ6mihV3P5zqPWXk4ZgC' },
  },
  {
    name: 'wallet-1731277116-68',
    address: 'agoric1z3yp75fy47e22tdqea5hu4347wk8e8gmftl7x6',
    pubkey: { key: 'ApA64XpAvJeDIsSk8K/b0DI6uEC7yX238WuUF4aenLCM' },
  },
  {
    name: 'wallet-1731277116-680',
    address: 'agoric1ctgwkxjkkfdmdtemee2h6ykunl5fzy79x7zk7m',
    pubkey: { key: 'A598Y/jrk4gb2VunKh3HjFTtWb2cU4VDOu0MJb95ME8Y' },
  },
  {
    name: 'wallet-1731277116-681',
    address: 'agoric13j4mlf5k6q5633nq0ev5py90htdhp48zkz3jr0',
    pubkey: { key: 'A/mPAJMwRShho2Kp877LGTtWsbQ8ieAner5+WH6r6iK7' },
  },
  {
    name: 'wallet-1731277116-682',
    address: 'agoric1mdydpn2ra6zq2lm5f40dz3az9tsqpzumu85cc2',
    pubkey: { key: 'A+teSouq4CcaKFAFEr5WPwRl9Cy4p0qtJHrN/Dl/nQOR' },
  },
  {
    name: 'wallet-1731277116-683',
    address: 'agoric1qzz8m8w50v2399tdr63zuv02mtdskstl5v9gs5',
    pubkey: { key: 'Au9J+mYQRj2cAW03f7dfxS7sbmV/BGxuvIEHkMm5fj4O' },
  },
  {
    name: 'wallet-1731277116-684',
    address: 'agoric1hryh7vjdzm63zzxn7qq94fgtx5jsu2nnzve5fz',
    pubkey: { key: 'A73APtA0PXBWTtuJAZWmzAUcEuMiiC5po8d+p5YkeisG' },
  },
  {
    name: 'wallet-1731277116-685',
    address: 'agoric1z3g8slqf5mdu6cxpnfnrlnvglvajsjrszeher8',
    pubkey: { key: 'A6GxlnNa47mNYDxpC6xuubclwV2Td+msPjfTG59Gy/Hc' },
  },
  {
    name: 'wallet-1731277116-686',
    address: 'agoric1222spvgf6h2wkuzl56yn7yenpwsazxdq648ytj',
    pubkey: { key: 'A4zgsQvdHs15aG5TQLnECh7FMC1ZIj4P2DsVBSxVD2ZZ' },
  },
  {
    name: 'wallet-1731277116-687',
    address: 'agoric1j9jp6ngfwvat0373sye38dd46rnqd4uqenjrsy',
    pubkey: { key: 'A9y6v4E3uwHyRazmNFHAW4VHq50y8BlQMtJ6+ZJsXNwg' },
  },
  {
    name: 'wallet-1731277116-688',
    address: 'agoric1vaq8v7kgfeynlxwz4lm6zsfqxjgw5g835d69ut',
    pubkey: { key: 'A4Fa933WVBsYGEcRtP/7Dyd4l1mY5upaJB+C5BZ0/f6T' },
  },
  {
    name: 'wallet-1731277116-689',
    address: 'agoric1uscdzprl5fmgsxlnkrjmevpddpzwuyxwq6mz9e',
    pubkey: { key: 'A5Yj9g7tK9lO//1vCWb2ZbVx2ny2aTbLN4Q5geYeYjRF' },
  },
  {
    name: 'wallet-1731277116-69',
    address: 'agoric1tqx99jys99r36gfewvm4qlh4djerhrf7ehu3p3',
    pubkey: { key: 'AvKPerho/AWVf0Cw5LxyoN9Bmjx7VKrd3XLE/Wq9WhLe' },
  },
  {
    name: 'wallet-1731277116-690',
    address: 'agoric1tn3m4md2pk7mfynym85zgg70uw3s96dcfazg3n',
    pubkey: { key: 'A6xJm8lC+lEVpr4Ej9wi3RnG1widFWvF3hpsqwHNhQZQ' },
  },
  {
    name: 'wallet-1731277116-691',
    address: 'agoric1gtyk86qrutvprhqe79xtmgdzyxn2rs4jaxntu7',
    pubkey: { key: 'AztNDEcPQIlHA56SFUQJtDPqlfSbJQvhcGFvV19uSUH7' },
  },
  {
    name: 'wallet-1731277116-692',
    address: 'agoric1973j9c58trpnp8xpnnaer8n47g5zdxzxvu792a',
    pubkey: { key: 'AyWSP0Hs35hGlxD+PqRDRqR3/hU0dN8uk7Z/xbqQGycW' },
  },
  {
    name: 'wallet-1731277116-693',
    address: 'agoric169kg48qknren66nw7909mk5emjuu0ez9pdk06k',
    pubkey: { key: 'A7JGs1Ri8mJTEwMpCd4CHxXNcGW5ux4q55P8COD00Zx6' },
  },
  {
    name: 'wallet-1731277116-694',
    address: 'agoric1mug3lmtem6s6gp2cy4fg5u668a8glycx04ehn8',
    pubkey: { key: 'Ak54dPwb2jXHyf9N6FqeEwjoXp4PMNlrquj+q+o5fIyJ' },
  },
  {
    name: 'wallet-1731277116-695',
    address: 'agoric1e9mmv90hqlkmr9vplxuh5a9fnwxxaut82wlwnc',
    pubkey: { key: 'ApUAPYfRADTbuZmaC9UZkiAQFEDevlJkNiBUMTFYX+8v' },
  },
  {
    name: 'wallet-1731277116-696',
    address: 'agoric1a5j90ksq9v0el4jz29eamhjyvez9e35p69d2vj',
    pubkey: { key: 'A1pJZr6kOZ3A6rJZu1/zeQ/KBGGZiCMI8WvODE7wNhNx' },
  },
  {
    name: 'wallet-1731277116-697',
    address: 'agoric14dwqqd5x55028z2ruznjzr38cf6mdth3h3fmh4',
    pubkey: { key: 'A0vyWK4JQ9dHgDOFArAfcdKMFrwAhVxQitOj7mgQBY3V' },
  },
  {
    name: 'wallet-1731277116-698',
    address: 'agoric1r4lldsrpcm3jwde96vudmn44l5j220sk2rwyeq',
    pubkey: { key: 'ArpcX/PuGIbePc0ncadqMZb1iH+fhsvWDdipndEVl7M7' },
  },
  {
    name: 'wallet-1731277116-699',
    address: 'agoric18r2q4wcjjuye4aqrwzkw25m2758sh57kncv8ph',
    pubkey: { key: 'A3lKcy9uhN81/5fLR0CFLfn7QnkvLW9aZrhOZsNJJ17Q' },
  },
  {
    name: 'wallet-1731277116-7',
    address: 'agoric1slr5nm0f3v6zw3ne77ldu4m60gf3rd6vw2s8mp',
    pubkey: { key: 'Awy4hvPX3Iq4LsNdqxvCvMXv9gcpC9gVkkjsV2eaPykI' },
  },
  {
    name: 'wallet-1731277116-70',
    address: 'agoric10p5vjffwe2w7js3ypakcywf8sky5w5ghfam9a8',
    pubkey: { key: 'A0ERbaSoVMcMYr+1vqqOv2JPpbaN4P6a56IrS2uRbz+6' },
  },
  {
    name: 'wallet-1731277116-700',
    address: 'agoric15gks58ek02qcy3wl47fwcmph329j5ps7rzpake',
    pubkey: { key: 'A3EcivOhEqqZxfjlJii9rpYR/FX4gJYawXZYIMDWPOxj' },
  },
  {
    name: 'wallet-1731277116-701',
    address: 'agoric1p9mr2vda7karq0v6td60juxvdh7s4x0a8anjug',
    pubkey: { key: 'Av45lVlwiQLu94HreXW/Hed7MEfuBfCwoO4wvzNC/nax' },
  },
  {
    name: 'wallet-1731277116-702',
    address: 'agoric1gkxdhcpdqrm2clyu7cawelrgqjdgn2q53sa6e4',
    pubkey: { key: 'A8Y4ayaIOuqErZOZ0TIEvBvWKaudh8gv0Mq/k94r2dqS' },
  },
  {
    name: 'wallet-1731277116-703',
    address: 'agoric180lkqgll9c5myv497lfz3gazawgw4fdjzzw5kd',
    pubkey: { key: 'AmCJSgReny8RF8wlV6UjTA4a8aXeWfLT9rB5YOkhBSh8' },
  },
  {
    name: 'wallet-1731277116-704',
    address: 'agoric149kvvg6uy473q6sw8vh0qjtsfy3n0xamdwutsf',
    pubkey: { key: 'ApuvkbCvZmkqGeZdcv6k2xl2YQSd9xTLYxa9HECDjsxy' },
  },
  {
    name: 'wallet-1731277116-705',
    address: 'agoric19e8sg99f3mq86kfpwk9rg003u37msfrq7q3cmj',
    pubkey: { key: 'A3JVzpyIIWLxgqOkbEsj9uYFqAc99c/t02F94uBYlnhu' },
  },
  {
    name: 'wallet-1731277116-706',
    address: 'agoric1cwdfedtha0kqgw9q3xzehrddnzhjf340hed47q',
    pubkey: { key: 'A9gFVFdnJotfdeO1hBLs8377VsMC8aF8l3/Id3SsWRiF' },
  },
  {
    name: 'wallet-1731277116-707',
    address: 'agoric16z3j88pc9rsqnp3zdlath8gxcl5urp585gd367',
    pubkey: { key: 'A61c7eR9Hnzc+ZCkX2cmg3tk/HtuQu3vz4MEzToXJHlV' },
  },
  {
    name: 'wallet-1731277116-708',
    address: 'agoric1t7ufs7ukeq2wqq5cglx6mm78nmsjm2jp6n4ttw',
    pubkey: { key: 'Ay55Cy+ijQ1jzR6kCxr7cFX/fT6mqZsGwMXzNoZM9Bua' },
  },
  {
    name: 'wallet-1731277116-709',
    address: 'agoric19hmapgw4xy8kvxu5m456pxn70lmlgh6sv4mkwq',
    pubkey: { key: 'AgMkmECMekzthflJrFmIPRC2pwG9bcS/VIyjQxlXsy9Z' },
  },
  {
    name: 'wallet-1731277116-71',
    address: 'agoric1jay5xaw2qfa0rdxacq2cgh6l9v63gc0nahsu5z',
    pubkey: { key: 'A7fJREMVhxjMH2MNQnvYVgiSviIs2sCXMzM+xddaLYbH' },
  },
  {
    name: 'wallet-1731277116-710',
    address: 'agoric1szynuvmrafethv2gf2g24zqqaky9nfrj5qw95z',
    pubkey: { key: 'AmgmVi2lpWSI38C3rlZ6XSuaeGixFuZeRTWRjVlA6gwd' },
  },
  {
    name: 'wallet-1731277116-711',
    address: 'agoric1vuqrqqe9dv26w97qe660dvsrpzwptmc70z2zxa',
    pubkey: { key: 'AjmYo0rKYcmecJHOC1dOCIBbj9/9tc5dq3X0yw++UJH7' },
  },
  {
    name: 'wallet-1731277116-712',
    address: 'agoric1840j6rrkasv67j8leeprgn2snsyggkz70w6vc3',
    pubkey: { key: 'AlgF7kg+jrYjil6W24NdLFC8Js9x/cQHmpj9LQzhhAzw' },
  },
  {
    name: 'wallet-1731277116-713',
    address: 'agoric1eyw6xpnrplad3khvcm0txskj3leaflr262t8zh',
    pubkey: { key: 'A389HanexndJhuREVVbiQ3Cq9/zbmcbj6DYTDunorgHo' },
  },
  {
    name: 'wallet-1731277116-714',
    address: 'agoric1kcwy5pgmjpycjtnmhy7crukd9klvhva25yxugn',
    pubkey: { key: 'A8OSERLy6UzVzRKon4LVrbxYY7vHNW5ICJ5p5waPWepI' },
  },
  {
    name: 'wallet-1731277116-715',
    address: 'agoric1kfu8myhe25fzhjdl6skh5w86lfx6q0qyhr83ww',
    pubkey: { key: 'A5/PPyMTN7NsEyPMeKnDtNdS/EYc5NuVYIIbXxOK6sWO' },
  },
  {
    name: 'wallet-1731277116-716',
    address: 'agoric1qskt5xa0rzy43k5nznkccfmh0w6dqdcrj9jk96',
    pubkey: { key: 'A5jZmr+CXJs2G/KEPOye9YO57SNODw/tKdYDwLIm12ip' },
  },
  {
    name: 'wallet-1731277116-717',
    address: 'agoric1uq2nk3tzd4kt0pfvlcu7r204l2lnwvhfj9e9gq',
    pubkey: { key: 'Apt31HVodrYswDSrX+S8FAp73NsNPCQyPjyGwo9kszpz' },
  },
  {
    name: 'wallet-1731277116-718',
    address: 'agoric1kg66uaq2z6u88jq2g6ypm87m9unvqz9ue6pvmz',
    pubkey: { key: 'AnEzP6b3OV8aoWbGeTh6f4npPO0qoFCjbnf92cP8BxJY' },
  },
  {
    name: 'wallet-1731277116-719',
    address: 'agoric1gffnjep8d04j0u5w25vaalx470glnngwg5ntvr',
    pubkey: { key: 'AsaH68i812a64HrmLq6JAbc95c66Dmd261LA2cW4Wybb' },
  },
  {
    name: 'wallet-1731277116-72',
    address: 'agoric1n6n4ns35vfd687e02efzxd0x9e5aylvs57wqrp',
    pubkey: { key: 'A+dTkWY0vI4zbyjDU1cxf6ADkRygaJCfle2mRUk/iSLh' },
  },
  {
    name: 'wallet-1731277116-720',
    address: 'agoric1e8utnch6hqfqgkdx8fa35phs40zggsqa6h4265',
    pubkey: { key: 'AjByxz33ddXy2qMMnGLCpR9lLgIS1hXA83CF6DGCzeRc' },
  },
  {
    name: 'wallet-1731277116-721',
    address: 'agoric149xzcknnfdgp0z4wqaz4xn50d78anv9rf4j2k0',
    pubkey: { key: 'AoerB0QmL1N21icjW3zaf7AHcq6j4K+7+cjStjzZIjDS' },
  },
  {
    name: 'wallet-1731277116-722',
    address: 'agoric1r2km6pt0c7rg8a2uw8604hcgdswcguzal3r9c5',
    pubkey: { key: 'Ah0OB3DSjyAPFHGfikYXuU2Uj6yAIe0ey83JrbnX3X6z' },
  },
  {
    name: 'wallet-1731277116-723',
    address: 'agoric1n54jsq289aneh8vgze58fr05sjtmuujyg2dkev',
    pubkey: { key: 'Ap6xy5c/YRikua/DVFPOvB/A52R41ehnccBIFMeLaenb' },
  },
  {
    name: 'wallet-1731277116-724',
    address: 'agoric1h8hdprppjw5tf58dveyzqsz0n86the9c8fgghv',
    pubkey: { key: 'AjlMtPBq+FInJZheFZNQdfMl+Rp3I7XOq+v/TomCtVb+' },
  },
  {
    name: 'wallet-1731277116-725',
    address: 'agoric1peae6dj6je0kqay0fmh3gvvkrq2a8l374xe47y',
    pubkey: { key: 'AuM16VoXRQgArehvcJdxERE6S0C6SeoidttD1JLLsgIF' },
  },
  {
    name: 'wallet-1731277116-726',
    address: 'agoric1qnrd5wechqyee36f0edrglvc0asfdach25n7t5',
    pubkey: { key: 'A0sNZUx+wb51H/U0W+lHP5YqCPlzkEAVZEdEF35sreVz' },
  },
  {
    name: 'wallet-1731277116-727',
    address: 'agoric1p6fjg00c7ynmcj7ga2heq3ryp5pht74v39d4c9',
    pubkey: { key: 'A5POw9PuiivxtPptu1lLMxTfuorR3/6r+GKm5J0ai+Es' },
  },
  {
    name: 'wallet-1731277116-728',
    address: 'agoric18s9nccj46nxrlfgd4phzjp7ajgpr97sxr9egl5',
    pubkey: { key: 'AsMkFBaktVEVqUokky30/xt6i20qGXTlUYVKAaofx0py' },
  },
  {
    name: 'wallet-1731277116-729',
    address: 'agoric1z03qstan4gp33jvq7lplnunzz344ekjctcyrra',
    pubkey: { key: 'A7G9XoQWggukjjbaGIIniY672x3Gu92+pcDf3cfGRcEg' },
  },
  {
    name: 'wallet-1731277116-73',
    address: 'agoric14sh9hazzr44a09un6sxse92y23aa88w0z8n55n',
    pubkey: { key: 'A9Szak2PA5bn6IssRoubsKBwWeWqTFKIrXOjlK6utaiZ' },
  },
  {
    name: 'wallet-1731277116-730',
    address: 'agoric1mzz6wgpucyuad5xdtxnxfx9mg8te83ymd9nl7t',
    pubkey: { key: 'Avd1Bw7gtTC++yIC5uH8kYmHUrLReqGtsRgMjQp11jy5' },
  },
  {
    name: 'wallet-1731277116-731',
    address: 'agoric1ygdkdn36l8e4w8ayj3aggvglnzz2fmcxywcwwf',
    pubkey: { key: 'A7XOn1BN4kkDpQPSLFGjS36P5tZ07nMOeFk+hbn0Fsmy' },
  },
  {
    name: 'wallet-1731277116-732',
    address: 'agoric19wz3nn03r4pqtjwpvet0r2vrr2klwhm63gvpez',
    pubkey: { key: 'ArNVz1bju2l1ELNakOt/F8bd/+qqR0FeCJAXtx1xM5VS' },
  },
  {
    name: 'wallet-1731277116-733',
    address: 'agoric1ec74yjkc5jqmk6d0pzc6mhmptty5rg8vm0j862',
    pubkey: { key: 'AqQDSBHC6pUgWUzbG0vZ7DZ4xfVSkavOsFma52BKgMm4' },
  },
  {
    name: 'wallet-1731277116-734',
    address: 'agoric1pqapxlwy3zxeshvxvp9w6rqe335z43t3vc8gwn',
    pubkey: { key: 'A+tWCQx4IjWrAOIxx9SKU6+C8AkgGOyHJdajcAEBJSRT' },
  },
  {
    name: 'wallet-1731277116-735',
    address: 'agoric1vgc78ss789unln8hdx0qkfzek9en249n72djsk',
    pubkey: { key: 'A3g96EfA9asR4YWEEKMXkPMEiFIM1n8LQ+zzOhGV8VLB' },
  },
  {
    name: 'wallet-1731277116-736',
    address: 'agoric17603427hakkeqxu4hk6s3zendjkca5fnv74q00',
    pubkey: { key: 'AuYIKbUrmHBA74WwYHdXBR4o1R7PrCnCMeVR7ux6h/TD' },
  },
  {
    name: 'wallet-1731277116-737',
    address: 'agoric1jxw84xpexd3dx9ed9sqjf6svv0ztlpj9jxuy8j',
    pubkey: { key: 'A4rCmFgK/tEqKgT4FOrjZOZlx9F/OwYZr7+BniH2ZAtz' },
  },
  {
    name: 'wallet-1731277116-738',
    address: 'agoric167f0jq5u225rwqt4xd3pkf6wsql45lcvzys3na',
    pubkey: { key: 'AutH88c/iql3dR5aFSk2LwD8hhn3p/sLEtGZ6tlqD7iT' },
  },
  {
    name: 'wallet-1731277116-739',
    address: 'agoric1c83mnp48uwlqrm7wujvjgn8dd8nd8h7ygsjd4d',
    pubkey: { key: 'AtYbT1S8eV4Bm38yhhH5L9FI1sueO6icnYxDXqAqeOjV' },
  },
  {
    name: 'wallet-1731277116-74',
    address: 'agoric1yqw6qp4krg739qklscathz9dw8ahjfwt0e29rn',
    pubkey: { key: 'A4cdsyWSZG9OOvUsL5KrL7OLNT+fHTK1bLLZVCKQADLC' },
  },
  {
    name: 'wallet-1731277116-740',
    address: 'agoric1mvfxudgeuwplfzgvh4l8czklh89nt5tupd6plt',
    pubkey: { key: 'Ap4bPHsMtelyd9p5iJykC+uTHR8q876lG3hNSUc1FcqZ' },
  },
  {
    name: 'wallet-1731277116-741',
    address: 'agoric15y4mkspgyqzae8mxn3wn2aua22lsvw9q006h77',
    pubkey: { key: 'Ahxv9oTd8F2CFjNtGbn+eWIqKAztZB8soDB6MX/kEz7v' },
  },
  {
    name: 'wallet-1731277116-742',
    address: 'agoric1eghtnrmle4ssqf06ly0p8gtsal3vpdhc7gjzvr',
    pubkey: { key: 'Aj7nj6J75hlYfkuFDg3XzHuxiGT1Eyspj0KGsMdivI4g' },
  },
  {
    name: 'wallet-1731277116-743',
    address: 'agoric1y7aunatt8alaptdk52lm7lma6532acp83rq8c6',
    pubkey: { key: 'Au9nNDacLE+1m9ULqVwV7jL/U2gcwX6Cm1LXkAsc19XI' },
  },
  {
    name: 'wallet-1731277116-744',
    address: 'agoric1c02zgt27w7na62mjaytlscfeus4q8j7ah0a4p4',
    pubkey: { key: 'AhygNnF/FBiK4Q6VBRTZ+PZ/GPRSFBDymfog1wuTbF36' },
  },
  {
    name: 'wallet-1731277116-745',
    address: 'agoric1r7sw43sl8xyp7qt6av88u0z4jcjkl7mk3hhys2',
    pubkey: { key: 'A/itm0LDCI3F9jnrqC1B9jgq9VouresBnBYhFjwt3vyC' },
  },
  {
    name: 'wallet-1731277116-746',
    address: 'agoric1h2dx9f8u7pwu87fzv7z3vnj8k0h4rewlfk9ljl',
    pubkey: { key: 'Am696iTz2WN4l58wE8IEipDvyboweQ1AvT8doHLdaVKf' },
  },
  {
    name: 'wallet-1731277116-747',
    address: 'agoric1qvudntdfhuwuhpjdkn0p6zedcjrjz7kh8n82u2',
    pubkey: { key: 'Aw8cPYgq62ClaqY6VN3dVpOSrDzczqyb0cep7ClmRF8E' },
  },
  {
    name: 'wallet-1731277116-748',
    address: 'agoric1sdgxqhqn7la434ev26qf2ar20k8259e6xr6zq2',
    pubkey: { key: 'A4QNaUUhNds5jFhCWxB4O1+5W22aVaou9RCgmVUQVXIw' },
  },
  {
    name: 'wallet-1731277116-749',
    address: 'agoric1c3fanjwxxcymkj9luk8f0y8u7ty0r06udma5df',
    pubkey: { key: 'A14o7x5y+VZbxLFARiDFuIbLgUMHFLBciRBGUp/u+KLu' },
  },
  {
    name: 'wallet-1731277116-75',
    address: 'agoric1xqcq3jhghywdmng84dkt2yj6k6rwlv03cp2lp3',
    pubkey: { key: 'AhNPMYk0EvzMWFp8ECZYrcvo7zIvt+iRP6mgZAL9fptu' },
  },
  {
    name: 'wallet-1731277116-750',
    address: 'agoric1j05jas57njs2ysa05qd6v0ph5lkn8dq36a4a28',
    pubkey: { key: 'A0KrN5n56QXoM3SSLNZcOEZIvb8gJzHUfwI38cz5kZj5' },
  },
  {
    name: 'wallet-1731277116-751',
    address: 'agoric1gcg5s9h75w6efxh48rws9tng5zfmvs9jmcehdh',
    pubkey: { key: 'Azr3jn65yt6LkdUPbxfJbphwHW8TI+00Zi1SQhZhaQ9x' },
  },
  {
    name: 'wallet-1731277116-752',
    address: 'agoric15gvl6t5ym3gdwn3qg3m7sxh5ck25494fr3eujp',
    pubkey: { key: 'Aha+kNMVJSx0INb8t1OnmM8qQd67kvESwHvaX5dVyx9F' },
  },
  {
    name: 'wallet-1731277116-753',
    address: 'agoric1c3k893dv2kcguugrglmwg6narnjhz3lvupe6dq',
    pubkey: { key: 'AtAI9mItY+aIGaFzWUDAeGMLu+62JO2iSIO4cSSbdrgI' },
  },
  {
    name: 'wallet-1731277116-754',
    address: 'agoric15xhr59p30k57hmehkr84gztc4nq2w4xyey9re9',
    pubkey: { key: 'A6K7GFg5n3nPN63IKNkrEhLf7qPVvfWH0s0nHb1ftPBX' },
  },
  {
    name: 'wallet-1731277116-755',
    address: 'agoric162q9t5lw2c6ved24l769a8rtzy79hv9xx9rvxe',
    pubkey: { key: 'Ai4vfdCk2hBLWVU3UBU9Qhciwld3zBHisqgXRzuN7SyS' },
  },
  {
    name: 'wallet-1731277116-756',
    address: 'agoric19csx2kd0dtgxvj3qqfcjeghqw2kw7dstvqg0lj',
    pubkey: { key: 'A2KwXdCLxdz0gD6HWxDJtPpAdezvOQttutqOQLXPmgZo' },
  },
  {
    name: 'wallet-1731277116-757',
    address: 'agoric13n63qsagx3usgyq6kdl0t52wxdz66j0j0u4y9s',
    pubkey: { key: 'A2UY2bQUrOXpHIQBeeBgW13CApyJ3afWWj+ZT4ZfIgE1' },
  },
  {
    name: 'wallet-1731277116-758',
    address: 'agoric1lxf0m4s543r8l73lww4ggh5cpaacf4lwl0zpla',
    pubkey: { key: 'A2r2IBh9YrClpFR5lLZ/SwsKXngsWYnF0LUcGm9XWV+Q' },
  },
  {
    name: 'wallet-1731277116-759',
    address: 'agoric1frcnva8m83ud2qxmhznafnfzp940wfmqq3nymw',
    pubkey: { key: 'A+aJwI8HyAUwgM9nfdwqvhSLDrA0RRB7X7dAKmM72tWz' },
  },
  {
    name: 'wallet-1731277116-76',
    address: 'agoric16zlm7ehv369a734krcllmgh9rdglgxkpmshl4v',
    pubkey: { key: 'A1xxBw/dQvFjnvGEweqkHrDMLG8cmLgAgJuofziCn/MZ' },
  },
  {
    name: 'wallet-1731277116-760',
    address: 'agoric1pf8nc2a5udmyue0zapych49u08pqq62ngp3u6c',
    pubkey: { key: 'Aq8LYHqiPJPA4gP8X+P9BCdb4t7o7QQOh3s+x0DzUi1n' },
  },
  {
    name: 'wallet-1731277116-761',
    address: 'agoric1pj6hrvdchytwgex3pcwydkp4nszwwecex0tfyf',
    pubkey: { key: 'A7/kR/kESYFcUhL/4QF3Gf6OOR5PbbcFry2ynG4CW5Xw' },
  },
  {
    name: 'wallet-1731277116-762',
    address: 'agoric1ktvr75j8wfp5undq6cekr63xrk0u45r2527s4f',
    pubkey: { key: 'A1mOhnj8fQMauX2GPPU27QbXzJ5qDPiOx2EP87zOyRdV' },
  },
  {
    name: 'wallet-1731277116-763',
    address: 'agoric1spzgd8jkuqdu4fx383c8r6f2000rhn6qa020gj',
    pubkey: { key: 'A/DwJxePCU+kWHjamnVQ6D1quSF2gqtuDaB9OQRKTXJR' },
  },
  {
    name: 'wallet-1731277116-764',
    address: 'agoric1gvdnj5r7acns5al8ll623nrk2ytlr09spymuxf',
    pubkey: { key: 'A61jmI2kHGVzNg9ZNdnaPYbRy+3E6fh9O2NcCMtGtRpM' },
  },
  {
    name: 'wallet-1731277116-765',
    address: 'agoric1q3wa8gk2l5efvxztpl9efm9av2sfhjd49mfv52',
    pubkey: { key: 'Aw8lxIS1y8ABN8tiSQUx+WH3rP+zykglZjzmpfl1lfgs' },
  },
  {
    name: 'wallet-1731277116-766',
    address: 'agoric1yzcpgxnl6kz7w24zlx4tclnqq247jzdkkfjl0l',
    pubkey: { key: 'Ap5Hzt/paGA1U/Wvbve735FMFG2/BeMUQ95LQr1hpZxN' },
  },
  {
    name: 'wallet-1731277116-767',
    address: 'agoric1gze732adwl324ul4s2cthhk6f29smar2953xge',
    pubkey: { key: 'A4L2pdLUPq7BH2rJ7NGk/tcaXT6NrumUbbT8Nmpta+uw' },
  },
  {
    name: 'wallet-1731277116-768',
    address: 'agoric1vq2jhhnvkuxkuuj7mzw9jdwrx0lqp0u2y0r4m3',
    pubkey: { key: 'AqCYpZ9cLCBNbgTqWjSKk60UIt8G8bt7cpskkbE441EM' },
  },
  {
    name: 'wallet-1731277116-769',
    address: 'agoric1dtuqhssmfuxcwj5cgpz2qvvt50cxcdg9xnk7c0',
    pubkey: { key: 'A3k2c1WxAeXukTqX5gfchLRFzGkMJ/fEWvId9uiyj64p' },
  },
  {
    name: 'wallet-1731277116-77',
    address: 'agoric1wfe9h3h98a2t4sufqtgvfakj775urra55y4ky7',
    pubkey: { key: 'A7NY8lc8TNlCY8akO0GgUFbqiwobhA59H8tF2fQ0YugM' },
  },
  {
    name: 'wallet-1731277116-770',
    address: 'agoric1xjpewx7d3nxvqdu3xrh5aqgapj7rzknl98vpxs',
    pubkey: { key: 'AoZwGiCnUoTZJ8ln70KAJg/eMkyuyVO1sFhopDrr19Qh' },
  },
  {
    name: 'wallet-1731277116-771',
    address: 'agoric1526q0ay73rnpc2r33qg8gn2jnkmdm3840znyyn',
    pubkey: { key: 'Ag04iLAJAgEt4wkk1Ey6CmQqDOYqbhhHiwTk8wiBBOn2' },
  },
  {
    name: 'wallet-1731277116-772',
    address: 'agoric1dpy8xwamfwl763plw3nwryrlfhu96nu9zjch5r',
    pubkey: { key: 'A0CW/fZQOPn4+l1mcmVU6oTQDl2bH4r+zgNY1/G2Z7xc' },
  },
  {
    name: 'wallet-1731277116-773',
    address: 'agoric160ej7zlhk4c4688js8f2hkhg7cl6sphjlau8dk',
    pubkey: { key: 'ArmiV0mM+5ow/xjejD03CI/5XgAGO8jIIta6VacHSnA9' },
  },
  {
    name: 'wallet-1731277116-774',
    address: 'agoric17vlwfmv3n6h2pz2kewg0q35c99dkqrjdjz3zl4',
    pubkey: { key: 'AuJJOCsCJ6dR3n/IvpvOqhM7dqjIoiiPCUmjhT0AJUUE' },
  },
  {
    name: 'wallet-1731277116-775',
    address: 'agoric103yup0v8883r272l83q2ja9fvut6lumehmyjeh',
    pubkey: { key: 'AuUksNXJOOLKShA7gI5B4tYgv6RmZ5CiJmJ378Lexlkk' },
  },
  {
    name: 'wallet-1731277116-776',
    address: 'agoric1xhza0uw5zshzdsj4c4l0vn4s5ndzkm364zlpas',
    pubkey: { key: 'AiHleIXUvNmHXUeozHqfVeiYf+St33xMod6b9T5P5x3K' },
  },
  {
    name: 'wallet-1731277116-777',
    address: 'agoric1aqgcl6j8690u59zf2shqvt7nu6fjecsx3hdmw9',
    pubkey: { key: 'Ap5SGqUy1PlXDqsGeX9SZgRIprN2GuLUuq9J34duaLp1' },
  },
  {
    name: 'wallet-1731277116-778',
    address: 'agoric17heycr4na7mgwfasz07yzun2murpgq30uxt2am',
    pubkey: { key: 'AwXc1/pV1S9ztVjKKhCjYR8Je1FQL43jflLTH5pQe0oC' },
  },
  {
    name: 'wallet-1731277116-779',
    address: 'agoric108pc7zaqskwhn0aqdyhycc87c459xlkv64te7h',
    pubkey: { key: 'Ao1p6xNc/xnTpY7Isn3ADwUrCD02wZFoD84LT3cBD4+h' },
  },
  {
    name: 'wallet-1731277116-78',
    address: 'agoric1qlephl4cfng6wuuj0ae3a7he20j84h5h5ye28k',
    pubkey: { key: 'AjuR+PEm6BHVmr6K7pW+2XqlF1njw0aS1YJEAlM5Y1wA' },
  },
  {
    name: 'wallet-1731277116-780',
    address: 'agoric10vs0swnjfzqlvckt0zuj4ln5ygcy0uxnwyceev',
    pubkey: { key: 'AzgNBWZgkideMKEw/zRhW1/igIYdyj1vj3PAOAWxZPH+' },
  },
  {
    name: 'wallet-1731277116-781',
    address: 'agoric1enkg269n4zgh25gf585mc8tvvf92sy437ak0wu',
    pubkey: { key: 'A4Mk1uGvjjPCsna54Z9RG/t2yM6veSsivcTQEZ1IGrtt' },
  },
  {
    name: 'wallet-1731277116-782',
    address: 'agoric12larrg2j427m76g2z0gefht302zcuzvs4pq52z',
    pubkey: { key: 'AnnUA2O2cAx4Pk06AgHjfzFqfPDQNsX3O9bMNWrMhni2' },
  },
  {
    name: 'wallet-1731277116-783',
    address: 'agoric13xavayl63486jghqsz0c2vuhqzznwkslngctgw',
    pubkey: { key: 'A8l0OtUuIyyvdxS1Jzhqt7JfrBZadLr1pJBXXZkd2pk3' },
  },
  {
    name: 'wallet-1731277116-784',
    address: 'agoric1lxt987m2zfs73vxmcuxaslt2z42spx3qxyrcng',
    pubkey: { key: 'A67fzP8Uxtw7NQnfy+PAIihSwZAi5Rr3e38YV19z+Qsv' },
  },
  {
    name: 'wallet-1731277116-785',
    address: 'agoric1j8df0zj359ad7u8v906hn6m8ch3cjyry53d4vr',
    pubkey: { key: 'Al1yo+OKFAIoyjbLhC6sYwnFaQgx34K1HcVYGo15nPkw' },
  },
  {
    name: 'wallet-1731277116-786',
    address: 'agoric1klj4jthg3r40wn2m8y84ndnalvvff3jugve4e4',
    pubkey: { key: 'AuFUVFWbreQzllcP+oavzui3zNxKhYzA2qC7C46j3Xss' },
  },
  {
    name: 'wallet-1731277116-787',
    address: 'agoric1hc76ejqk8wr8wl3kkhtexanqgaw22kel6genz0',
    pubkey: { key: 'A7n9jxxrk0edfuKkZ7S4fd/TMxzh+Mu9D82XrYtIgRTQ' },
  },
  {
    name: 'wallet-1731277116-788',
    address: 'agoric153a249l6lfge5tchn5ey7mgvn7pdztccmsc03w',
    pubkey: { key: 'A7/1o77zIJwmAXbRCN0MfCcNdzwRLxmvwH2ufnHTqrVr' },
  },
  {
    name: 'wallet-1731277116-789',
    address: 'agoric12yxtvucxcjzy8pkw0f34fwu42jk5e0fkwyp6zl',
    pubkey: { key: 'AicJpoPMlSLLE6S++r1TJd+x1fNt93Sfqr0MWsbo6w20' },
  },
  {
    name: 'wallet-1731277116-79',
    address: 'agoric18zclvtspwv2y0ku0a9j4267mr6lqcqpq2ekwjv',
    pubkey: { key: 'AxAu62yFsIPgSsfjJkPoYLk/pJ6gSbHPSd21XYFYVMfR' },
  },
  {
    name: 'wallet-1731277116-790',
    address: 'agoric1dxnfqzuxkvt6jwe756gpjt9xa0hvr5xrkkv95q',
    pubkey: { key: 'AjIfV8sfoPbBCU6g0YpGrEc/O4luLEscMVfjQQpbrQ2W' },
  },
  {
    name: 'wallet-1731277116-791',
    address: 'agoric1rksyar0fqll78mnyn8jhqds9rjuwfyh8wxxlkm',
    pubkey: { key: 'A03rSd4OhrvzbnQY3SOU6OG5w9RKIGpzaY4GQwjVfs6H' },
  },
  {
    name: 'wallet-1731277116-792',
    address: 'agoric12xxq0c39y0dpm0ajk8lche5pysw8jr2sqz3h9v',
    pubkey: { key: 'A+igLCtEwi544cC/PLcCBUF1QXLK4d0n4jbPAJF9Ntqq' },
  },
  {
    name: 'wallet-1731277116-793',
    address: 'agoric1qcajuchzkn9l37grjhgtmydtk2gu2lkt0p8zxd',
    pubkey: { key: 'A7FbJcHZTeIknT6tSUaoPNn0lrJn0qavggWMaymHMYuT' },
  },
  {
    name: 'wallet-1731277116-794',
    address: 'agoric1u4rrjm0ydnuyke62nt74e8gamyzunsvkpjlxpw',
    pubkey: { key: 'A7FAhERe+Jm7bXseTTuc4WSQwzHjIOkHdlO6N0U+2I+K' },
  },
  {
    name: 'wallet-1731277116-795',
    address: 'agoric1xnwxzf2lpam6359ugswn9sechqxcp7lzxc3h2k',
    pubkey: { key: 'A1+IGBrGWHwMd5nDu4R7zV4T+HdCRewy0ZVaOoySUwXN' },
  },
  {
    name: 'wallet-1731277116-796',
    address: 'agoric1yuh4atfkjeu8l0n56fyhdsuz3qam7g8xqv0mjz',
    pubkey: { key: 'AmPQkIJ1IhZA6VDo5pqOYjOgkFqTcDPi/eEw8Zb8CU/A' },
  },
  {
    name: 'wallet-1731277116-797',
    address: 'agoric14yymd764pyxcup97t2yw63erhtwm4j3h6pvxgw',
    pubkey: { key: 'AxuPttPB8AURSk81OVSeMtWUUGPgQh5EftlmnxgczhnX' },
  },
  {
    name: 'wallet-1731277116-798',
    address: 'agoric12kjgucj8rr76da8w8qwszeq62w34w7f4u7u4c2',
    pubkey: { key: 'ArmCae0uKzp38ciIcxgZdf79mVD+llg2SPEnQujE2RCv' },
  },
  {
    name: 'wallet-1731277116-799',
    address: 'agoric1kkpadr5z8693hc74qqxlf7z9gd4e4y40lgmzx3',
    pubkey: { key: 'AljVvNkOxRXstH7rklWUqbkzeI4D6f4LrKNgUDAc/3RO' },
  },
  {
    name: 'wallet-1731277116-8',
    address: 'agoric1p0h40ra2v7n2vkdjhdzra6daqzf6u66lmq8tlh',
    pubkey: { key: 'Ahm7IXGnYy8JysfiHP7xXazHnEbMkZczIjw/jBG2fory' },
  },
  {
    name: 'wallet-1731277116-80',
    address: 'agoric1e2v7nvld3302wqjnu6822gfngc00ndud205vq8',
    pubkey: { key: 'A5Cfgpsm5MYXck4dpaqdhvS+tQFtDU7amp7zwvFsv04z' },
  },
  {
    name: 'wallet-1731277116-800',
    address: 'agoric1h80cxcmglef6ymgd8keklqkee0n6qfw3a8zsqv',
    pubkey: { key: 'AmzOV8mUCNIA2nQWNh8IOCSDp9YvcD1LhzzKCK6c1OIz' },
  },
  {
    name: 'wallet-1731277116-801',
    address: 'agoric1gdexc5mkd9vpd528xl29d2mqlms02r0hvcysy4',
    pubkey: { key: 'A7Dba4kD8PiwzWzUsFsPIhTx3JFpXXpdkSgUaowTvnue' },
  },
  {
    name: 'wallet-1731277116-802',
    address: 'agoric16fc6t202m4saa3gzgfgww2ux9uvxfwupmv0n6y',
    pubkey: { key: 'AmcKoPGbVlnDYf4HdCNTeP2HF+sIkB1h5SyTn40RDjj7' },
  },
  {
    name: 'wallet-1731277116-803',
    address: 'agoric134uzlvm9l6guep2reqk6jdfkd6f8333wwt0ulx',
    pubkey: { key: 'A57Ti/3yJH6Q7KIty58/vRqUg9XTI3H7ztXGcwqBAFpA' },
  },
  {
    name: 'wallet-1731277116-804',
    address: 'agoric1fvgfxnfjt4hk3yxnmdwrkysld8t0lzq8hs397j',
    pubkey: { key: 'A0e+I81U8A3g48cUcAfHox6A8kyoM9UCLc2NnPgb0mwS' },
  },
  {
    name: 'wallet-1731277116-805',
    address: 'agoric1ua5e5yjnae70stla0yjd5ksm9jk28h8lcmjgej',
    pubkey: { key: 'AycB9jeMfZOzTj9TDh7UHpnmd86UUzLjz6MPDufH4vx4' },
  },
  {
    name: 'wallet-1731277116-806',
    address: 'agoric1dr5tzt8cjhta295gvyy5elc2thlwzc2ahy6266',
    pubkey: { key: 'A9JQiiX/utPrKBQG68/a5MviBu1WcZRqCxjUJss2PERS' },
  },
  {
    name: 'wallet-1731277116-807',
    address: 'agoric17qx83y8leu7way2u6scqyfxvkddhsshxdev7we',
    pubkey: { key: 'AnrdYTpyvrFnjnhyQqoviWaI2GQaH8JMYlljQtFwVTzw' },
  },
  {
    name: 'wallet-1731277116-808',
    address: 'agoric1r36c3h0vwpf25u006tnuctkdl8k53sc2wm2xrn',
    pubkey: { key: 'ApOG2cUttpSLPcKHaqXPNiw9YgF5eCSZc8EjDDugYfxw' },
  },
  {
    name: 'wallet-1731277116-809',
    address: 'agoric1u5cmu5csfcgsnslm2zu5874an5ec57xmtzays0',
    pubkey: { key: 'AhQQMNAWT4MGNkbsDt4YL3UpXmJdy8wrVnW98aStZIMC' },
  },
  {
    name: 'wallet-1731277116-81',
    address: 'agoric1zw4dwqr2enkg86586lhuqhwmtgwty23ftq89z6',
    pubkey: { key: 'A9ptF0B3gsjn61pNqAtDtzskJzNd/G20ClsUNAwqOtDN' },
  },
  {
    name: 'wallet-1731277116-810',
    address: 'agoric1yp66xf2nqlndwqgywnv8rnp6jfqklutpmhsyvp',
    pubkey: { key: 'Aj8D+5q0wOSIc/T5iqeibAawgSFotDUJ+DjY+docn1o3' },
  },
  {
    name: 'wallet-1731277116-811',
    address: 'agoric1rjz03xshqx55kh358pyhwhhwn07n5vrvmr87pq',
    pubkey: { key: 'A3CCfmSerC1NCJmLwZY+WDCEmUOHfLWtFqiKpgIZci9N' },
  },
  {
    name: 'wallet-1731277116-812',
    address: 'agoric1messwn3vqy39dy38wvz43dd4v9tlh0rz5fy3u6',
    pubkey: { key: 'AuoC4UcXuM0AtawU4MXVdBN7lo1jzWzAOqXbJYox8i5a' },
  },
  {
    name: 'wallet-1731277116-813',
    address: 'agoric120dkfl9umw7fzw895vcdf7j9nvv4pu25lf0q29',
    pubkey: { key: 'A7X2rqqNsSOskKFZ4mKVeVVPgPzJAN0RebrGlXa6BYPK' },
  },
  {
    name: 'wallet-1731277116-814',
    address: 'agoric1w4plwz78zxcyk3x7qcemvlylhhmztm4ftq8773',
    pubkey: { key: 'A7U7XT76zFLr7q5VrfDb9IyoX+nU8d6rYRReVHCuwCdN' },
  },
  {
    name: 'wallet-1731277116-815',
    address: 'agoric1z52n3y4ejsz7yyk4l22pyqc5hnecy6qes3g3gd',
    pubkey: { key: 'AsgEqEzZvza1xVyTfPUlXkkEi5VxaPOYqkxOCTFPlm5T' },
  },
  {
    name: 'wallet-1731277116-816',
    address: 'agoric1a0n3z7d427wpykremzpnv6pwh6eu6wssxq7g9d',
    pubkey: { key: 'A7I9OQ15q1Rr3Qn8SP1wiqK+8fAcXYrHj3qFLfuGlx3Z' },
  },
  {
    name: 'wallet-1731277116-817',
    address: 'agoric1yrzhzh2tvdz5dnsgdmfdw8px747rkj5vpu24sz',
    pubkey: { key: 'AvgVRx7yijAsvUgNghT9Cr6/ibCBQtXurntBXzd9rVnM' },
  },
  {
    name: 'wallet-1731277116-818',
    address: 'agoric17sehdn3wnk3nzjj7tajdmgau6svn8cvuhsds4j',
    pubkey: { key: 'AzIaH5mnj07ETSNZc3CvKXcu8O8fnuFrgOQOXEdMqHj+' },
  },
  {
    name: 'wallet-1731277116-819',
    address: 'agoric1t2dewcgl276nxz8ka2wjg0fj8ytwanpnv3fsln',
    pubkey: { key: 'AhPSaA+s0MhQdORm78AiRvro5kli7WtDwlnHhIp9XlVo' },
  },
  {
    name: 'wallet-1731277116-82',
    address: 'agoric1qs6ud5mr85lsz07gnpcxcqw34jwx3k5e2448l5',
    pubkey: { key: 'A7oZS3xW3Lhubpqzvc/WF1QoqXde2BfQ8WllgKxa7ivj' },
  },
  {
    name: 'wallet-1731277116-820',
    address: 'agoric1cqpxtkmrc8v8hnh4pj5lzyjlf66nq6h57u4s2m',
    pubkey: { key: 'AxhpAXjzu7cgwfLmzScAGXEZTcRLsE05S5Wqc/aZH60a' },
  },
  {
    name: 'wallet-1731277116-821',
    address: 'agoric1jx2zvcr3xrpf0mvrkek94r37mz2ve6z643ha3w',
    pubkey: { key: 'A0gIY8x0dm+6XtTRmLkokQ112WBpoOKFldsPV/U7Hz9l' },
  },
  {
    name: 'wallet-1731277116-822',
    address: 'agoric1ymkx2uyzgpxsjdfuhenp7sddqxkk9agkklhv3s',
    pubkey: { key: 'Ay8+9D7F05sTfyILVaXr0Nv/vSWBP7USMLWtIFFsrRl3' },
  },
  {
    name: 'wallet-1731277116-823',
    address: 'agoric1wvevp5uqqjt0l0kzr3v7zdpf9dsp0vgqpvp2d4',
    pubkey: { key: 'A6ERmgddVCcRwv7gtwQHlEXI859SgK2i9Yn8vuLeg2y7' },
  },
  {
    name: 'wallet-1731277116-824',
    address: 'agoric1lkcerqujxsslft92t2mwkr64ap6mtphde5wwyf',
    pubkey: { key: 'A1Wkpb79lh+SUxdzSkm4S5CpKXuEHql4oujlHvGsq/14' },
  },
  {
    name: 'wallet-1731277116-825',
    address: 'agoric1xfdhwu7wq2hp56xfpep9usfyjwgnlhj0twdwvu',
    pubkey: { key: 'A3bLQwpdFmiud8BH9VndDYN0vrMQgjjA/7jmub206Jyj' },
  },
  {
    name: 'wallet-1731277116-826',
    address: 'agoric1wd2uu2lxel6udrjhjpptmtpa3g2nea08vp8vwh',
    pubkey: { key: 'ApK1hQZjdev+oJ9SgEWPHc/lxVRNeqRHAcW0d4NWSFlN' },
  },
  {
    name: 'wallet-1731277116-827',
    address: 'agoric1c28mz070p8qrkt600ps6tl3l9d2v3fr0m4lg02',
    pubkey: { key: 'ArJLP/Uuj1GUeM7MNNg6TImmKpEjuILkjELqOCDLPzSx' },
  },
  {
    name: 'wallet-1731277116-828',
    address: 'agoric1l0qzekxmptcpzaucfw3geyq92alpvwmd620an0',
    pubkey: { key: 'A+jMKeF166rIMQj1/GjWC7+w/3AHshmz9QNJxl96P5cE' },
  },
  {
    name: 'wallet-1731277116-829',
    address: 'agoric1eg3jfxdha7g29408keqhykqrgecfq9v2we3uc6',
    pubkey: { key: 'Akq6ZtzcWqc7ZE0VApc6wqdTaHjD9O11wM60ZIc8npeL' },
  },
  {
    name: 'wallet-1731277116-83',
    address: 'agoric1zlks8lp58679th404p3cvy7a4zpgarjskrd6ek',
    pubkey: { key: 'A4YP7MUBScsP8XKpBdDy9Fey5CnvjsQ35N39D8974hZg' },
  },
  {
    name: 'wallet-1731277116-830',
    address: 'agoric1hk85xu94xk8dxwtyzn7dlkxxzu58q56p74ynnq',
    pubkey: { key: 'AsHKZk60zgdVOcXKXR09fEBrOw0VMkPfDNdD7NciyQgB' },
  },
  {
    name: 'wallet-1731277116-831',
    address: 'agoric1dtg4jw0es844nfu4xldyqc9mauhajj8du6nvs9',
    pubkey: { key: 'A9eFer+NOCIbifp+DvgQAwNTYtT3niH6cIsupxSfRUDO' },
  },
  {
    name: 'wallet-1731277116-832',
    address: 'agoric19v57ycpswfzc0se9hxttlkzjj4m9hw85l5yg94',
    pubkey: { key: 'Aga4Jw0n84SS3txOI1ih6vKMbTctk60t2CLimrUo13bV' },
  },
  {
    name: 'wallet-1731277116-833',
    address: 'agoric1d9kmy5aghl7k3ljspa23qjh6vlmu0gx288rmyd',
    pubkey: { key: 'AqPRamAIrK3PheDHH4HUQTsqTo98VdGBHVp7selqxBQQ' },
  },
  {
    name: 'wallet-1731277116-834',
    address: 'agoric13zsqs5u0sv8mzxjea9xp5c0pyqzhyd50nca45x',
    pubkey: { key: 'Av054DyeYzNZIel3bVFGdJOG1+erABhBXBJAxjnq0+j5' },
  },
  {
    name: 'wallet-1731277116-835',
    address: 'agoric1vnq56cnmamlkxm9lpcm3kr75zua9g5ntyhr0j7',
    pubkey: { key: 'A6Y/liw3G3Jh/Qqx7t+3cljIEJ0teNLRJaBfVOqepN2Y' },
  },
  {
    name: 'wallet-1731277116-836',
    address: 'agoric14ae0v3wwuqtw5vfmmkc6yqh5jgt8nt5fwzv0zh',
    pubkey: { key: 'AieNK8V87gNgBP5fXKU7RGM0hZCxJAlWNR/w4FUOWHhC' },
  },
  {
    name: 'wallet-1731277116-837',
    address: 'agoric10uhqqw35lgykgnu4g2v7p5keyeww0wqgkqvsh5',
    pubkey: { key: 'A58p0yO1bb6QN3hfQGigmQAMd7krYgKGpAm2h2nYZteB' },
  },
  {
    name: 'wallet-1731277116-838',
    address: 'agoric1ajfz9cua8vg3q0wt26d4su4y7376vcqf2slcj6',
    pubkey: { key: 'Ao8n9LOCv/ZujKMSK7e+E5srHnsG3wW+RqbWWR/COaLP' },
  },
  {
    name: 'wallet-1731277116-839',
    address: 'agoric1mfskwl2tmkevfwa2l2rtesuwtqhhnj6qr727c5',
    pubkey: { key: 'AyRPlHOVPbvYd9BVK2/7ErKf04Hwj+gHKwtYmdX4Vtyz' },
  },
  {
    name: 'wallet-1731277116-84',
    address: 'agoric1a8j95wkpqd8y9xudzxvfj66nuwphh7k2psfc2y',
    pubkey: { key: 'Al/0bhBpjwZx5mP0KZRLt/xDch+v+2TfS3WDuAl49P9d' },
  },
  {
    name: 'wallet-1731277116-840',
    address: 'agoric1sutuajm5p7xw6wsepsrj2r09h9hr0fxuxfrsch',
    pubkey: { key: 'A385+yB/bhCRMxoA8UxipI4djgf8titpeHOSFaw/mOZz' },
  },
  {
    name: 'wallet-1731277116-841',
    address: 'agoric1tp2mz6skwl4cpyvdw4fsvfgup9kxttpxa6apv5',
    pubkey: { key: 'Ag7KVlg6b70aiCUqG4MH17jxA0pGPjwujfyP1vF73BCH' },
  },
  {
    name: 'wallet-1731277116-842',
    address: 'agoric1c2h64mcze0wyxqdzd4y5lm3czm5gscvs82xkfs',
    pubkey: { key: 'A8qNik5i3ZSpIGfn1EwLIUh2KO/ROIZEQBoatRi7MxBQ' },
  },
  {
    name: 'wallet-1731277116-843',
    address: 'agoric16raa25t7f8ectkf8tjjx3j8n0hu0xes77ld05r',
    pubkey: { key: 'A8VdmklxvwAEV7Ys94I1u6jGmS8ZW32j674tHgFRTdcX' },
  },
  {
    name: 'wallet-1731277116-844',
    address: 'agoric1z0l8znaltlf7ezv3vnsksfak9tmzdu26h05jea',
    pubkey: { key: 'A3N+Qm5uGI9Kx6K6BbUcGtQ7Zfp83emTskLkym6TzkyN' },
  },
  {
    name: 'wallet-1731277116-845',
    address: 'agoric1jquadjaas0gmvzdjrd0fs2mngmgzcmukmn7n7r',
    pubkey: { key: 'A+2IVDvCQHpPzkDf3kgxrI9pxIRCD6tdtVgU4Kl+5xGo' },
  },
  {
    name: 'wallet-1731277116-846',
    address: 'agoric1xcy636aqksscd44yp2sukw7gnalgufzkcvgqp0',
    pubkey: { key: 'A7wS2EK047zn9UmXxET6Ulu/xhxaewk0LLDxzZvoKMt6' },
  },
  {
    name: 'wallet-1731277116-847',
    address: 'agoric1nw5askrd94wq7yeu2vxl4xfg3rzuem92fqxsy2',
    pubkey: { key: 'AuFZuDewUNq9XtEqLNHfKfb0D+H9bTeCAhh8a+ga++Z0' },
  },
  {
    name: 'wallet-1731277116-848',
    address: 'agoric14d5u6fwk59kutcaxh3nxgqnhr2nr5e0u2yxlcy',
    pubkey: { key: 'AoKo2Lc3aX/o/lDx27+DTUfoenRK/reVuQjXIohS8F60' },
  },
  {
    name: 'wallet-1731277116-849',
    address: 'agoric1fuuynt4knrvzqrhwfkfeq5wj2autk5440sa62v',
    pubkey: { key: 'Ar3erZmlYFNAYjWVdHhfyZtpvRlDIANZzrhPVw+16V3n' },
  },
  {
    name: 'wallet-1731277116-85',
    address: 'agoric1waz23rp2664egluc58q3x8l2ezpqwv0ccyp3z7',
    pubkey: { key: 'A//hUK55Jc8dEbshzwCGinh9k3j72naBap9ROH8ifeo9' },
  },
  {
    name: 'wallet-1731277116-850',
    address: 'agoric1sv5wxeuezy9m7vnpt6kt3da6pfdexgr5yvarmw',
    pubkey: { key: 'AjnVEib4QhvER4doLVvJ/2geDk0jNCE+9qd0BKvzZJ0D' },
  },
  {
    name: 'wallet-1731277116-851',
    address: 'agoric1a2ffxu98rtg2dt5tt54a0wxq99mvqakvdfngwe',
    pubkey: { key: 'A3p+U1aKBbozo8cmRLzGS0ijGZ51O5vJXZOdXqaljAir' },
  },
  {
    name: 'wallet-1731277116-852',
    address: 'agoric16xlpefx6suewl984slf76423cwf8mdq4jn8p3t',
    pubkey: { key: 'A9jVaetw/aKSBpUvUM0jKienCt1vbgvtE7x68sXDPTps' },
  },
  {
    name: 'wallet-1731277116-853',
    address: 'agoric1mnchytyx07k328zctelewduuw7hjxnmzm88l2g',
    pubkey: { key: 'AuN4PKEUq3OZn3YqOoDIUbSXHLS5QjK2GenQqRSHu8l2' },
  },
  {
    name: 'wallet-1731277116-854',
    address: 'agoric1z64k6ueerxgumpuq5kcexqw89v5a25t8mf292s',
    pubkey: { key: 'A8Pt/EX078dMFtL0TQwW25Y/nluqGQaMkYtq/Mkrj8cV' },
  },
  {
    name: 'wallet-1731277116-855',
    address: 'agoric16vr20rvnk2h5ght8ezhuza2rhwqvqw4khnft24',
    pubkey: { key: 'A/ixtmNZc4uEpv0r72HP01RXzA4MQlDLDdt+UU6FvhtH' },
  },
  {
    name: 'wallet-1731277116-856',
    address: 'agoric1gzptxfxg6mtz69832y0ad34fp7ky7jgv37tx4f',
    pubkey: { key: 'A3n24+H38IPHUrk+/FJP61SKh9Ir80foRYww45uMCTqV' },
  },
  {
    name: 'wallet-1731277116-857',
    address: 'agoric1fdaqnxz5nck36np9xj8xqnwdzrgxrc6lzuwdxe',
    pubkey: { key: 'AnR59QJ2oDrJEHGiEhWfJr4GB/nGamh+RhRygsnmYxoF' },
  },
  {
    name: 'wallet-1731277116-858',
    address: 'agoric10zf535cxsv9myya2vcz66qu7k63nm8a5thxpaz',
    pubkey: { key: 'A6L0+nwvQbei6ZS3sVjVAFq6gaUPWw4IBRtJfAYPUB0b' },
  },
  {
    name: 'wallet-1731277116-859',
    address: 'agoric1dphmqhvqptxwdzzze24nu32gqyjxuzcrwctk80',
    pubkey: { key: 'Ax2yPscWipvdpp/8/y2mSNIhY5v047hAwLqqg5nsjkmq' },
  },
  {
    name: 'wallet-1731277116-86',
    address: 'agoric1xxugqhhukuem647mf5y8g25czyz82scfec548s',
    pubkey: { key: 'Aq42JmRkXyJ1Bu7ucKo3aDShRBIdFAe79gnuiWkig+6o' },
  },
  {
    name: 'wallet-1731277116-860',
    address: 'agoric1jg6lwcqyjt5ppl3en3t839hfcxujn29ywnus47',
    pubkey: { key: 'ApqdeCk85x1JY2GwGr1dIOCWrq73Jr05kv9VlTMFRJ+B' },
  },
  {
    name: 'wallet-1731277116-861',
    address: 'agoric1eplh0lmta730hyhvknnxr6v4xh8kf6lyzdrf4g',
    pubkey: { key: 'AhyvH01BH69+qYLsR1T3WQ3Hx8rX/A+hG6Faed5B5/b9' },
  },
  {
    name: 'wallet-1731277116-862',
    address: 'agoric1ag78qrr3vmj0nswj62mlamkavcmtxlcmrj4a3u',
    pubkey: { key: 'ArtC3N1YHFruFC51jZ4DxYmDB56YqPBqbWYFwcM/XwQx' },
  },
  {
    name: 'wallet-1731277116-863',
    address: 'agoric1pr24k8xmsa5ewe46mj3lfva8v4z2g9a52333jw',
    pubkey: { key: 'AyV66U25hDSludKCxF4bTHUDkQZFcCERajGPHMuPBd+C' },
  },
  {
    name: 'wallet-1731277116-864',
    address: 'agoric1udtvq3wv990tstzxty00x6smc9sp7k3pn8ap0l',
    pubkey: { key: 'AothGTZO4xPmOiHrSjTFkrWskSaU3dKSsFtzZo5ybWHO' },
  },
  {
    name: 'wallet-1731277116-865',
    address: 'agoric12skrjjc0zau8em3pyl7w3vpsfc2cl5sx3lgcca',
    pubkey: { key: 'ApDcvlAOIsbo6u+izlbVBLHVN0MxN/GJGbuqi6EryZS8' },
  },
  {
    name: 'wallet-1731277116-866',
    address: 'agoric1gchk2anwzsdjhsdaw52fkdxu5q2hdk7vlrk62q',
    pubkey: { key: 'A30LqQHNAcg5qPjAoIOewjt9OkO9jDlAdOk4ZKjREtzD' },
  },
  {
    name: 'wallet-1731277116-867',
    address: 'agoric1eq3r9p56amv875ymdwxdn46s7q9rcug5gsmu7e',
    pubkey: { key: 'AtoJsGm0LXtojL3rH9MsXQ+x3pyVFGaDVJajMx9VcIA9' },
  },
  {
    name: 'wallet-1731277116-868',
    address: 'agoric120lrypnj90660rxsjdftwh9xw9mnjpvrp36u3z',
    pubkey: { key: 'A7vyFugXVlI9dBCdsklJCRur/B7Wd6mqwVcgDwqUmv4F' },
  },
  {
    name: 'wallet-1731277116-869',
    address: 'agoric1g97lyy8yekqwcemwswhqkmu2uy35x5tyxudukl',
    pubkey: { key: 'A3iIlJTL8RxGPsmRoohi7lKpKO6L1lgapWinTXs/Xc1s' },
  },
  {
    name: 'wallet-1731277116-87',
    address: 'agoric1p72nrn0cvkt5nklzc7wk79qn3tld98jm4m5xma',
    pubkey: { key: 'An2ZgSUNi4g/XCvMc/gRe9+FcOk+/sY2So8XW2krPFOH' },
  },
  {
    name: 'wallet-1731277116-870',
    address: 'agoric1uff2qw6x5lgnwvq9sa56kegh2uvkrucnugrsma',
    pubkey: { key: 'Aofuvkoc0iKY2dlhwha5XWoA7kB2st2vlkHF1qRzzPLk' },
  },
  {
    name: 'wallet-1731277116-871',
    address: 'agoric183twg4thzul5hvye8cd3pkuywmdmfs3hzspvtu',
    pubkey: { key: 'A5+t9F9U3XL2eXI9OpFNwOg5avvdBBnaK/yd7pkusn7C' },
  },
  {
    name: 'wallet-1731277116-872',
    address: 'agoric1hde3zgt4vawafxtka6k6tqm594hfm50s56rrwn',
    pubkey: { key: 'AzCLQAj9Ml0DpMpzHUgn9qzZzlGvNopoAAQ8gpTcX5Wm' },
  },
  {
    name: 'wallet-1731277116-873',
    address: 'agoric1dvw4whtgp4khcvv9fnd8wek4pdc4pzzxmassu5',
    pubkey: { key: 'A04oivgofWM0CZuXzpuKzcMwsCSWk/wDDV5+EMD7/oGh' },
  },
  {
    name: 'wallet-1731277116-874',
    address: 'agoric15s9p5dvhgvtd0u8w62xdc0zmv8vhvynmt2ygxq',
    pubkey: { key: 'Ao3m5PWvfY7eh1tU+W6wn0Fnuom7YkFCfsBzvFH/qK36' },
  },
  {
    name: 'wallet-1731277116-875',
    address: 'agoric1x9zujerzec6ju3cqasscfq2dsc0evuz5td3s92',
    pubkey: { key: 'ArlH6pvCaOS7xDZNKmeeJy+lTxaf+Gxv0e1ZcC5vx/vk' },
  },
  {
    name: 'wallet-1731277116-876',
    address: 'agoric1hn837nluhdv6xh84jvlq9sgny47enpjkxj280u',
    pubkey: { key: 'AzOqIReiub07QIARrmPNsj00bU0vc336OyeLHS03jBnJ' },
  },
  {
    name: 'wallet-1731277116-877',
    address: 'agoric17u9sfwhdccu8fgkk9c2s2y5ns027hcdmzr2ldk',
    pubkey: { key: 'AiHj+78m3HdFAxdVZfXb/i3q2+cor61eeqyT9ELExKja' },
  },
  {
    name: 'wallet-1731277116-878',
    address: 'agoric1tesvdfcaxqva9rckh9qfa9n863v63e6dly5r3r',
    pubkey: { key: 'Ala+O9Tb5wvCRxcVnHhv2pUaIIdlmfF6jPNy3pBd0JFy' },
  },
  {
    name: 'wallet-1731277116-879',
    address: 'agoric19ca84njuvzt9m74jwrfyc4gsk3jdlvgkn62k8q',
    pubkey: { key: 'AmhuPdpcb0XzHr6LjIdN51n3wWldlVl4wNKyEWVazVB0' },
  },
  {
    name: 'wallet-1731277116-88',
    address: 'agoric1ndw532w9zcah0sjdf8xzjarzuq5hcaczjux482',
    pubkey: { key: 'Ao+LKULaMj4gcwqTdV8BMgAsmSfWjE71FqYCfY45AUna' },
  },
  {
    name: 'wallet-1731277116-880',
    address: 'agoric1d57605m69shh9vvfghftkm29mq2yfpacg48k80',
    pubkey: { key: 'Aobj2xz+IcmWT8u0f8j6SOpbzV8eC+V7gmrLiTqEWu6o' },
  },
  {
    name: 'wallet-1731277116-881',
    address: 'agoric16mk7fnyrek7sjeq6c487z7g5j7qyrnxrzv8295',
    pubkey: { key: 'A9lj/109bAYEDySZq10p44DBKIzSxFZ8lqTRvX8Ouah5' },
  },
  {
    name: 'wallet-1731277116-882',
    address: 'agoric1suzvqtp0kjvmtdv8s8erh95yzgk4n4y48ezvcn',
    pubkey: { key: 'A+3s0gNSEX0qmdKE0HiKctP+u1fgPcXpN1nNWkvzC2RW' },
  },
  {
    name: 'wallet-1731277116-883',
    address: 'agoric13rsw6s2guwn4myll0eshdcxe2gl82tsjwlj3zl',
    pubkey: { key: 'AyfQXu7U8EelQHPjOjpddVyVgwfJ5Iu4rRVktn39dWRI' },
  },
  {
    name: 'wallet-1731277116-884',
    address: 'agoric1qgvsfgnrlfvfuzltvz9m9ya87s9fjtp75a80gx',
    pubkey: { key: 'A4TT+x95sh53bUcKNfTaYeqWb56bQRZQhtSmTZUPQ0HF' },
  },
  {
    name: 'wallet-1731277116-885',
    address: 'agoric10dzq2qlg72vp8ev73npjwclgswu3e7a9zhlwxu',
    pubkey: { key: 'AsdEjcCS6oGmAhiTuH+UBiUcDmcnf4d9M/pZ0ylEYC0j' },
  },
  {
    name: 'wallet-1731277116-886',
    address: 'agoric14azet9tsz6pu77k4pdstdpep2h6mlxyglxq6ds',
    pubkey: { key: 'Ar/CGUZbR30nFluPBJQSilas1UoSLl1KS7YZKaIZtfN6' },
  },
  {
    name: 'wallet-1731277116-887',
    address: 'agoric1vxunadntcxas73shg58u0d4ws6ve6vkysgxr9l',
    pubkey: { key: 'A6a5qh3B076ctisD4RG53XI6psnwe/ycY+AEt07HZk2o' },
  },
  {
    name: 'wallet-1731277116-888',
    address: 'agoric1lm4zuq6kc34wp22fnt52dad6umfgl4envch3f5',
    pubkey: { key: 'A7I3MenbQMdXq6IA6eY1MQYkkDPoip7O1S1xFK+GEcd/' },
  },
  {
    name: 'wallet-1731277116-889',
    address: 'agoric1sfxjm3weg3qvvhfuppg8309xrgel04cuqjv4kj',
    pubkey: { key: 'ApfYnTLsOIgkvkBrbBjUH0dS4K/gLnOsDvcLarN9YcYz' },
  },
  {
    name: 'wallet-1731277116-89',
    address: 'agoric1y8gj9qj8qwkxvh8ldpmqca6rtjsstjaapp4607',
    pubkey: { key: 'AmqYD8HMFbjXvX9zMIv1dc64h6a757+igZbOn305T4G5' },
  },
  {
    name: 'wallet-1731277116-890',
    address: 'agoric1lqlujktkwzsypn2kf5p36xqusmz04j8l85drt6',
    pubkey: { key: 'A1JoMPdzuDzqyOuaOLMBPaqIgttKzf/s+dmqdqjr9Img' },
  },
  {
    name: 'wallet-1731277116-891',
    address: 'agoric1f83a8guw62cyzfy6d8p9aw7jdpwkpn45sq3mrk',
    pubkey: { key: 'AlMQeAeyhsipQZ2FDu7Iuo0gPPeqSPFUmIvStoBOAulD' },
  },
  {
    name: 'wallet-1731277116-892',
    address: 'agoric1ut8td0exkj4s8v9rdv5ufmcajx73tmwj783kkk',
    pubkey: { key: 'AgekB3ac0vW50JnWaaWUQ87qpJrCpfigvNyxdV6kuJl4' },
  },
  {
    name: 'wallet-1731277116-893',
    address: 'agoric1uxjmra3nyw7r7690jw63cnsryl2znnn8qa6cjz',
    pubkey: { key: 'A7CGCFUfNTReezIYm198f5RdxwLQ8E0cDX1KGx6cRL00' },
  },
  {
    name: 'wallet-1731277116-894',
    address: 'agoric1e5f8zszhhq68h7peshtf7x8c2q9ntdlr2uyrr4',
    pubkey: { key: 'A7CVp9eJ7FTAC0gHxa4RneXjlqjYQY4oHvQLOxWUoJtl' },
  },
  {
    name: 'wallet-1731277116-895',
    address: 'agoric1t7c5m2p3wjwjzh7s4hx9hzwyjdjtnzgzgdq0mh',
    pubkey: { key: 'AlQBSRwwADY71OtS19TBj+y633+J8U0BY9XoQ6rFt4bj' },
  },
  {
    name: 'wallet-1731277116-896',
    address: 'agoric1zsm5lx30s5dft35js5luavr8h33rlx6jfqm3gw',
    pubkey: { key: 'A3VDzygiw+cV4K7lUUKH448NpbaqFSyWLsujzh6IHz8h' },
  },
  {
    name: 'wallet-1731277116-897',
    address: 'agoric13ule8ym4q8zqe9tkltqs36wvmsanqrvfkuncxy',
    pubkey: { key: 'AsCfgJYtdSrPxxsJL2oav4jPhUJf+JEpG7srraWFXS5p' },
  },
  {
    name: 'wallet-1731277116-898',
    address: 'agoric15qnwjpy8x6pyqa4wkkegc6h7dgahq3e88dsxch',
    pubkey: { key: 'AioPZ//jJZI3FPhBtVI+oNuIKOVsVffG3uvmU9DZfXtA' },
  },
  {
    name: 'wallet-1731277116-899',
    address: 'agoric1mqmf3k67vect6eurqhmz8eakdjh7h5dywa35ga',
    pubkey: { key: 'AyKY7x5o9Gyca7L0lX2Xi6oLX/qWc2dFYzC9eqKN4YdP' },
  },
  {
    name: 'wallet-1731277116-9',
    address: 'agoric1ppdynxh9msx529zvd4lzpyutjsvxvcktujv9lw',
    pubkey: { key: 'A7jG1NqUSZVfYzo6VQxbP7EBCRLanYMAFFmSgxWkLUtN' },
  },
  {
    name: 'wallet-1731277116-90',
    address: 'agoric1l70m200audnsrwn0ry96arrusdy0p88hltpkpr',
    pubkey: { key: 'A8zn6e4uR+vruW3W1ggNADttEI3wYX/MkhZeAgLYocWy' },
  },
  {
    name: 'wallet-1731277116-900',
    address: 'agoric1r46vnaxuq09sp4873fgvx40lyjx35ag3007yep',
    pubkey: { key: 'AsCtWSwnuLzmFrGb2AolPCs+fSmy8MB77ACOK0rjvALs' },
  },
  {
    name: 'wallet-1731277116-901',
    address: 'agoric1p4h9yqpyhpjavmpscy7ks2mfz08v42m0gve94s',
    pubkey: { key: 'ApZDGsB2EY+he4Oy741500A1n4N6P6pv42SzGCbFipi0' },
  },
  {
    name: 'wallet-1731277116-902',
    address: 'agoric1c36xaajj0kmq5mdpv6tz9v06yhrtsa6nr00y6d',
    pubkey: { key: 'A94i59Xou8J5WcBn8cRfnn2nyPMRnup1dd/2hvQeKVrV' },
  },
  {
    name: 'wallet-1731277116-903',
    address: 'agoric1t898a92zwugve4vnwk0x8umnz9mjlzp2lf05st',
    pubkey: { key: 'AxQnmP8FzBIs7mMSTcCYohJhsuko2oQfA2DGPciWytOZ' },
  },
  {
    name: 'wallet-1731277116-904',
    address: 'agoric1z3cww5zusy4lzzwsjca08v3ccnckgdjchkus9f',
    pubkey: { key: 'A9QGUNzvBkl+MwaT8Qt8ixNC4GwjQ3pdCtAIIWcoV9EJ' },
  },
  {
    name: 'wallet-1731277116-905',
    address: 'agoric1440ky55glc7mj36z3yxxlwxuy8yv67tkh0k0xp',
    pubkey: { key: 'AwHQilyaX3GqqQkE6Q/MNoQqeCoMZCMIeSC0GdEeeBD6' },
  },
  {
    name: 'wallet-1731277116-906',
    address: 'agoric1xfx8zjvpkhphfaetfc2qu8jt7vrj05p0v50xd2',
    pubkey: { key: 'Axg33XazOOCaGwuBQnvDXqTL04aYz5OSSJfwMsnz43Vf' },
  },
  {
    name: 'wallet-1731277116-907',
    address: 'agoric1rn2rn6a76rmm8srta4regt2jxj4x7rwy6qypk0',
    pubkey: { key: 'AqrdASSZrW3D9Xoe880WPnvnxypL0A86Ox0eb6AYG0dw' },
  },
  {
    name: 'wallet-1731277116-908',
    address: 'agoric1v550zua3zr3ez8y4uv6gr9udcqn0czetps8mhp',
    pubkey: { key: 'At9hPoTxyuCMRXSR5V30ducBlp/i3+QiTFNtVWxYJNwi' },
  },
  {
    name: 'wallet-1731277116-909',
    address: 'agoric1vj2y7dhlyd3f3xfyucdjka0mq4ww3jfw2md5tj',
    pubkey: { key: 'AvFYgzEl/ivC6PAUDmg4y6ERXvMZ5JfBUm0pgk6Xeo1R' },
  },
  {
    name: 'wallet-1731277116-91',
    address: 'agoric1te5ujy30z8r4awhr4vken6jlz874f8q3l55gkq',
    pubkey: { key: 'A7699aa95Eb/RdpVIwz3Ala3SCTAUalw+KRPijVrpmz+' },
  },
  {
    name: 'wallet-1731277116-910',
    address: 'agoric1345mr792cwh8kzmj576kvylf6ktnr3qm4srxnt',
    pubkey: { key: 'AnFlTYUEO6kMeicLJyZ975OWszDuZ91+Up3JO8Pa2OMD' },
  },
  {
    name: 'wallet-1731277116-911',
    address: 'agoric157dfl5apjywlyecnuy4uv4m3g6yyrp76rkuzha',
    pubkey: { key: 'A6gf7YrNL0Z0i7AruK/ifE8drt/8DJeaDnSRd4mciLtZ' },
  },
  {
    name: 'wallet-1731277116-912',
    address: 'agoric13w3avsuumuzcwkzmgvf7dvun52v7a2fuyvyufn',
    pubkey: { key: 'A54u8WBl6CYC9AgIfaflP4/IjRTAFANyH7vLJpa3L9O7' },
  },
  {
    name: 'wallet-1731277116-913',
    address: 'agoric1u269gc07f03wkxjxwev0xpzdfyh3tejahuf494',
    pubkey: { key: 'A+BDKiPbkG8mbKf7qcLq1PsmLfnQWXcBNhJf+vei4HoO' },
  },
  {
    name: 'wallet-1731277116-914',
    address: 'agoric1x77zw377ezdmuscmm8y4lke86e5frakgvuj5gz',
    pubkey: { key: 'AvFYYuX0kYoIv0YfIQamK1nxHOagLaNzvyloeQEntXxX' },
  },
  {
    name: 'wallet-1731277116-915',
    address: 'agoric1jnwj7gvunx4xnmchjf26pjz99rgwcsy9e2czcx',
    pubkey: { key: 'A2jf02nKN2e88hCFZZ46QorpghCyGeF1mglJa5qH6HSC' },
  },
  {
    name: 'wallet-1731277116-916',
    address: 'agoric1qz75wg9dtjx9e8lldqqvtk00mxf6c0dn69de2z',
    pubkey: { key: 'A4pEfiieFVIS+SHP76Zk8veMNQjdliMS2oKmMZjLC9xR' },
  },
  {
    name: 'wallet-1731277116-917',
    address: 'agoric1faehzykve98qecjsr7t665mknpvk9nz4sumqm9',
    pubkey: { key: 'AmdYxf3IlmPpSPfpNR+R9ibyUJqkvrwkI490OxR77A7K' },
  },
  {
    name: 'wallet-1731277116-918',
    address: 'agoric1dacd9ejmwpvgnkz9jgad3eg7cnkqd5a2ggwx5t',
    pubkey: { key: 'AjGg76HwxwOH9iy9Of9/UMYuEqEfFUSLgBMOaAlsZfjn' },
  },
  {
    name: 'wallet-1731277116-919',
    address: 'agoric1lyt38rwyc4gy20ldcmr9sr8pwszs00a7f6wjzd',
    pubkey: { key: 'A/YL9g/V3dQGaqL3JaTgSrkxo4R37+CceSe8wSOyBHk5' },
  },
  {
    name: 'wallet-1731277116-92',
    address: 'agoric10gjykwf2g8xs0dujyw7actuglxmy7z8xdjkx5u',
    pubkey: { key: 'A7SXYYNt5Fw5PKkRo0WfTMfZtckaxwen4xvGeHwZKsrU' },
  },
  {
    name: 'wallet-1731277116-920',
    address: 'agoric1mu0wf467dh3ftvl667qnxkhg5r406e4mrefpqf',
    pubkey: { key: 'A7TJatYBTLWo3+HAb68fRK0ytdVnPqlMsc9v0LW8G/GL' },
  },
  {
    name: 'wallet-1731277116-921',
    address: 'agoric1rqdgfs9lag24ucamlzxw28r2qurrdl6u4l5ag7',
    pubkey: { key: 'Axym9fwZj5jQdRjazxqVvXlUwzNZ/vWb3RrWslRPN9Gp' },
  },
  {
    name: 'wallet-1731277116-922',
    address: 'agoric1kh03rlacky6ppxf0m9sh6068n5q8txfm0r8zjx',
    pubkey: { key: 'A5VhoRXx3cPs5lUqBfK0SCb4uj8cDFiMAPnfIex+JmWp' },
  },
  {
    name: 'wallet-1731277116-923',
    address: 'agoric12hndxclxlkvfmr27gk6fed5ga35f773kgn5n04',
    pubkey: { key: 'ArKad3iWm6lpbgUBLkjkL2+RiluRs0zcESucXxyu7Dv4' },
  },
  {
    name: 'wallet-1731277116-924',
    address: 'agoric1mmwmlqcuv2gppfte60u7faghpw6u0ep3u630g2',
    pubkey: { key: 'AqJhGHVpWc+T+8Qt2mleVtbqfwYjhMMoPYybhD/wjF1k' },
  },
  {
    name: 'wallet-1731277116-925',
    address: 'agoric1nhxttknx64p9k6jqjw6epkh5prfqynkxhr4ekg',
    pubkey: { key: 'A/KFxnu4NRtgRQNf+oQbzjyQHKWBf6ullf6nClgtvhmf' },
  },
  {
    name: 'wallet-1731277116-926',
    address: 'agoric10spswaaep2ejses0xyyptckc4h3hzezjpvukj3',
    pubkey: { key: 'Ah2h432k8mg5G3zHYenXwOmn/jUUfwLwi079MCpL3Xys' },
  },
  {
    name: 'wallet-1731277116-927',
    address: 'agoric1sh8zsq66cje533umhshherpwd4g9zjeg40v7a2',
    pubkey: { key: 'A568LL7CgiLOMfvwMRwo4nx5AR+4qqYXMW2LkPq2vXiz' },
  },
  {
    name: 'wallet-1731277116-928',
    address: 'agoric1uqhkdaueya2mlw6arhjztducd266pmsvmx6xly',
    pubkey: { key: 'A208Nc8Nxjk6uwBvxwAAREmIbENY7E6VTLUFedizPmAd' },
  },
  {
    name: 'wallet-1731277116-929',
    address: 'agoric1cr6rreyflfnqjselgqqluexurqy7uugdenhftn',
    pubkey: { key: 'Au1QDqTdrd/Q+BRB/clUyNzv5br69pOSFY2uPoax7+RF' },
  },
  {
    name: 'wallet-1731277116-93',
    address: 'agoric1ceaqaxrezkm88vms5fpn33hc2zta9e8d8ak9fu',
    pubkey: { key: 'A+5zOmoqzBiuG5C0tDGEtq4A8Z6MwB4H9c81KmhtuwCw' },
  },
  {
    name: 'wallet-1731277116-930',
    address: 'agoric1ucfmvmxqfuzt5cuelh4dsf706c20arhrl5s8ak',
    pubkey: { key: 'A0trIy1KgIZYJqUhO3b/2FLCxcMAbF89bTPekxL+t4tx' },
  },
  {
    name: 'wallet-1731277116-931',
    address: 'agoric1azqhycny8rk0wglfzwyzact6g6876jr3jsuxh2',
    pubkey: { key: 'A5HOzd/ud8qu9hQ1i7m9dCfMtrw1+EUIe2WZ2IeRAYgg' },
  },
  {
    name: 'wallet-1731277116-932',
    address: 'agoric1d0x2gueu45m7n86x75g45g0dhr3hp3p4znl3r5',
    pubkey: { key: 'Ap8e8t5VM0W48GY+u3x8pEN2aKSJOpuprglhUIv/6emd' },
  },
  {
    name: 'wallet-1731277116-934',
    address: 'agoric19nqhnklzhguc0j4zrqpsq03rkw3c4jagz92ea0',
    pubkey: { key: 'A+Xy1TGmtmXx7ZpxNimdefSGP+VUpbPjsx1LHguAIf3D' },
  },
  {
    name: 'wallet-1731277116-935',
    address: 'agoric1ck9phpn94xf345g0ktxj38zkwtg4cm6km5j9xq',
    pubkey: { key: 'AjxdEIDARFGvFf+ZPKFyBwfefPXd4+4VWPkhC9Q8NwhE' },
  },
  {
    name: 'wallet-1731277116-936',
    address: 'agoric1cax5u6ml7q39xcawj5uh5fc4qrl3442au228mg',
    pubkey: { key: 'A2to3w7XcoToxHv+A6vmZubatq6LDXLL8HR8DFkasFC1' },
  },
  {
    name: 'wallet-1731277116-937',
    address: 'agoric1q8kk6ru8kwnvt5la5hmawyjrwv8tz93x5lewyc',
    pubkey: { key: 'A6HKJS4NrelgQhVJxoEilibfCF6Lgo2k+E0rSTUkjmcc' },
  },
  {
    name: 'wallet-1731277116-938',
    address: 'agoric19wgd42pegqpy6fty2dvsu3mp4th2aekvzvvmak',
    pubkey: { key: 'AtSzn1TlZz9xAj+bvRi/piKNV9RVKg4Y2ranYIVP4dRY' },
  },
  {
    name: 'wallet-1731277116-939',
    address: 'agoric1s4dphcwmpasfd2fnjsz6u336nxyv5pcfaexewl',
    pubkey: { key: 'Aj0632gxm7TgRnGvrtMyPMFuOSINCHAcsXEBtKj101r5' },
  },
  {
    name: 'wallet-1731277116-94',
    address: 'agoric1zjd54hesawwvx94un3u4e40qm5je2qunv9krxe',
    pubkey: { key: 'A1PVRYS3VokKWFyHUgvnAiokDX14Erjoa4ceC5ONxL8O' },
  },
  {
    name: 'wallet-1731277116-940',
    address: 'agoric1ed0hrcrcarsrdkewtw8jglfq3uuvmstxp8u3fp',
    pubkey: { key: 'A7tVojhlqQ7HzUgtsaEVi17L4OqDdR/5o3DI3bE9ix/Y' },
  },
  {
    name: 'wallet-1731277116-941',
    address: 'agoric1txp6jaxsauc9qgd7zr4tfvcyuc3j58d3raf5rh',
    pubkey: { key: 'AgUc1wwgHXsrWQi3mSAQHehMFOO3Xi4JUv0pErcPfDIg' },
  },
  {
    name: 'wallet-1731277116-942',
    address: 'agoric1j3ll9frhwxfhdzcl5fuwvep5dqwewnmrcgdw8s',
    pubkey: { key: 'AyogHy9eRjFUe5qp27mulXg5+LW27XFwqZS8pxCUMqAZ' },
  },
  {
    name: 'wallet-1731277116-943',
    address: 'agoric12xfel4la96h5hcrckm3zxecgdnwlue93sa6l54',
    pubkey: { key: 'AtTUKJIb2gd2pInVHYPnYheBxbVQANvSkXMqYNKMMtld' },
  },
  {
    name: 'wallet-1731277116-944',
    address: 'agoric197awfdhuawg30cd02j0ag8e0n8hcgkr56ac5zy',
    pubkey: { key: 'A0mxrX4Y1BOSIHFqtbIPD8Ee1AR6PDz0Q/FlgX0cRwp1' },
  },
  {
    name: 'wallet-1731277116-945',
    address: 'agoric1dy2s4wd7gfuyyupvar6jd9ty3c9672yle5h4xe',
    pubkey: { key: 'A27ySHwn4C1mqPoxd3w/O0ZpTmZXNEvYq+tYto/Xj7qZ' },
  },
  {
    name: 'wallet-1731277116-946',
    address: 'agoric1spt0hcwvh8ulpl6z3jenjnqhc2jc7lmgwhxkp5',
    pubkey: { key: 'A3FvvRtSG0FexVoxSEx7XZ8oWaDM9X6nTYBzzzAYr2ed' },
  },
  {
    name: 'wallet-1731277116-947',
    address: 'agoric1dcn7ggg8exjw3z4qq39muk3e29g6kglanj3uaj',
    pubkey: { key: 'A4vvrqtp5WFov4DqazjRg/FC9seqjHEJzeDtyQ/OY2DX' },
  },
  {
    name: 'wallet-1731277116-948',
    address: 'agoric1qq0qxvr8aknxclwjld82pavdmelav2hxy00xcg',
    pubkey: { key: 'AtSKqRc/5lSgG4o2kz4kD4xrr4wQWDZaTfGkWElFG2jg' },
  },
  {
    name: 'wallet-1731277116-949',
    address: 'agoric1luluuv2jdralm2gfjuec4mj4c780yjcnu4k3x2',
    pubkey: { key: 'A0sNXYPQ8KFYH5vikkaopTWZe4c1Jidtm49+TJ/VUMBB' },
  },
  {
    name: 'wallet-1731277116-95',
    address: 'agoric1ffxalkg2uaekp382ap4a6wjh5e9x88vfazyclp',
    pubkey: { key: 'Ajh3o/vvUi+J26vbhVXHGUje74E/jeJoz/hmiiTEIURm' },
  },
  {
    name: 'wallet-1731277116-950',
    address: 'agoric1jqvnksmqm7h20e48ddyj94tpr39fh33jzxkfym',
    pubkey: { key: 'ArGYIOyvtJJ2Sh9IThr40uMrTe4OyCeKtfeca/PCNJJm' },
  },
  {
    name: 'wallet-1731277116-951',
    address: 'agoric10eavdtxspm0v93y78jqr4d6a6nphwgt43c6l94',
    pubkey: { key: 'A0fsV1DhoTP+C9ykgY6LqfnELenM1zeLfSYgDRptkfVI' },
  },
  {
    name: 'wallet-1731277116-952',
    address: 'agoric1vvee39z26lp30203k6dwkpfdrz96xujlmq7ur6',
    pubkey: { key: 'AoCdZN/qhxUv9qSQ7IHvqNdWHT6CGRLrIyu6Cnt8EK+T' },
  },
  {
    name: 'wallet-1731277116-953',
    address: 'agoric1uqwptvu0tfuuv3hvy5wmsgdlgj2hz4wztj6rf4',
    pubkey: { key: 'AttjviXq6WhBTN0/cBtTeOIG0sbWmbgGeeaXvmLPdXX7' },
  },
  {
    name: 'wallet-1731277116-954',
    address: 'agoric18qvnw7ld6zx5en3a7cq8fpetfk9svsh2a7n760',
    pubkey: { key: 'A51oBzjVoyIpKLyOMNqlwMOoCJm97TpeQJbUH05/rjrb' },
  },
  {
    name: 'wallet-1731277116-955',
    address: 'agoric1r4c2qj5azpa5t37eeyw8wgt4j4kwvnt8d0xuxp',
    pubkey: { key: 'ArJhSNth0WRsDKD7+lok3iqeykMhxVKigjeawAJgnj9O' },
  },
  {
    name: 'wallet-1731277116-956',
    address: 'agoric12z3ufwk02km07z8uvdky3mwpqvrfzpf4lcaj5y',
    pubkey: { key: 'AqK9JfaoUSFTs1D+caMDpbdaiHjvTtmpGq2uGCdcQBwk' },
  },
  {
    name: 'wallet-1731277116-957',
    address: 'agoric1gp88wx25yx7njrpx8vdmy7rc0nvv6fv5d8nptn',
    pubkey: { key: 'A8l2QuQoa9EuJgi6XdzLL1XxXjwIm8kzvSZRYRpp/v1c' },
  },
  {
    name: 'wallet-1731277116-958',
    address: 'agoric1y95nhgn0x0504cvxrhm7wgvmqkv2lu7tgn8vlk',
    pubkey: { key: 'A1T45+LX3V3kO+eKtx4mlsbrtaQBhlvBvGOirwa5Pbzz' },
  },
  {
    name: 'wallet-1731277116-959',
    address: 'agoric1ya4fwvghn8n9w6q7vw4tzhgd4y9tm32waulrjm',
    pubkey: { key: 'A5lgvkC0r6lLfqYlIsNywCaofwLVIvDc5NxSJ9JT6h0d' },
  },
  {
    name: 'wallet-1731277116-96',
    address: 'agoric1gdqftmlusnv9n0gn82lu360f95vet6wucsjxjm',
    pubkey: { key: 'A7oNdkRxwzKVv/trY7P1By+Z1zJ5IpY7C6JcrzyZIJRh' },
  },
  {
    name: 'wallet-1731277116-960',
    address: 'agoric1zrnq8u4pyhawxf9l79g8dw6gcjuae8e29pekes',
    pubkey: { key: 'AwkRhrFgoaJFlbSPedKv+yDX7mF8mB/7DSfE9fmMRwbx' },
  },
  {
    name: 'wallet-1731277116-961',
    address: 'agoric1u4urlmc83hv3h9aatlslusvyg366kzmjnl8pjd',
    pubkey: { key: 'A7zZTdr7d/QRCBB11ShLU4PvIruulCvhEbppqQzLrEQg' },
  },
  {
    name: 'wallet-1731277116-962',
    address: 'agoric1860kjk49nfl6aszrmt2amfvaxrs3eu7l0xj8c2',
    pubkey: { key: 'AjRankgNVy3pCsQXbWaZrZlIy9wzsTenat+i0Ouh1RnK' },
  },
  {
    name: 'wallet-1731277116-963',
    address: 'agoric1muwlnfd9urlple9gaqkc20c942t4tm9048n0uf',
    pubkey: { key: 'Am1P5Owmnt46BWyREdMu5chpap7fisR/mgS5AMWWUvXK' },
  },
  {
    name: 'wallet-1731277116-964',
    address: 'agoric10vsezey05gld7q27k04zku4dnlsnk53l9ceckn',
    pubkey: { key: 'A9Hm66Nghm9wtCEfIYpypqw1XPM8FKQOeqvG/2GPVSPV' },
  },
  {
    name: 'wallet-1731277116-965',
    address: 'agoric1ryfqv79z5zfalz28fjpzrh7ufkkv28ljek2upu',
    pubkey: { key: 'AiRM3LZjVLWU6IyYPRCJSoh11wd+IOWckJ7+XKbLUeV7' },
  },
  {
    name: 'wallet-1731277116-966',
    address: 'agoric1l6fkv544q838gqtweyhzf9arj6hnxml5mtg4gs',
    pubkey: { key: 'AizCvXx/DSq8cT8CNnV4rKuYFHFHtiB2b/7QwsBjBjC+' },
  },
  {
    name: 'wallet-1731277116-967',
    address: 'agoric1wjjlkpjgmdnht09u0xn0cz47fn0k0wadwqs46w',
    pubkey: { key: 'A9swiEC1aDKh+7V3+qsVcGFCu9GIAhVhWzRXtBKRiY5I' },
  },
  {
    name: 'wallet-1731277116-968',
    address: 'agoric1h86u9c6jyfacgxnhspteyzl8jucffjwhqrzkdv',
    pubkey: { key: 'AgTclc0g9ouspf9rEzFVsTt96hbFok1U+1qP7xmUARRn' },
  },
  {
    name: 'wallet-1731277116-969',
    address: 'agoric15ugxfkvpmhhrye274e2g8engwq3frkyz9hhhwn',
    pubkey: { key: 'A/vLzJLfdgCMEUp1kCILQ1cPijqajR9drWm86rskh482' },
  },
  {
    name: 'wallet-1731277116-97',
    address: 'agoric1lzpmrn4h3d5nmv9x8w3l0jq9f9u3tnch4un5m7',
    pubkey: { key: 'AlPwEqchhALPMoBpNUZr8/V1cKNecS8p+0SUP88iGosV' },
  },
  {
    name: 'wallet-1731277116-970',
    address: 'agoric128jztrrhvygn4wdv3f4hfe0vw9wzsqs76vgghf',
    pubkey: { key: 'A26xZ9H2VFrTuYX5qwMwtK3XrYWu9EBkUQNXLNdLBoDE' },
  },
  {
    name: 'wallet-1731277116-971',
    address: 'agoric1383dvpgmhrsjeqxv8wcr550j9qpjmurq57q5hs',
    pubkey: { key: 'AggDaOgOkQeTxs4khmGHUSw9s8yjlMpJ/fyvQ9GPH1VM' },
  },
  {
    name: 'wallet-1731277116-972',
    address: 'agoric1n6mrjrylxpvswz2hdumlxda46e68weuxklmyxv',
    pubkey: { key: 'AjvUxCOrrpM+K/ECxUGQAIYDJW5uGYoD+ImNJ64ignD6' },
  },
  {
    name: 'wallet-1731277116-973',
    address: 'agoric1zzeyyqktyxjeyguj7fsmvy2aj26mk854fcl3ec',
    pubkey: { key: 'ApbYAH3M4z2H3RPdetKLaTQL7+bXEGnbVQLU/iWJILCt' },
  },
  {
    name: 'wallet-1731277116-974',
    address: 'agoric10x6fvh0a6szwztyx2g453ycaj2sr4tum2ne44y',
    pubkey: { key: 'AkO/BNKCvmi3zdcYOjWARBPLQjEvit6v9E3BwQnLVAKQ' },
  },
  {
    name: 'wallet-1731277116-975',
    address: 'agoric14h6jr9wq5rjugky5ktx244kg464j7qnenz46k5',
    pubkey: { key: 'AuJ4Q4vVw41FpTEzdninigUbPq+6WpJv/Jr6MyAvDpsR' },
  },
  {
    name: 'wallet-1731277116-976',
    address: 'agoric1mwd2mq7h2kwx4xgww3dk8v37rz4wtmstgcvdsd',
    pubkey: { key: 'A+XnF9XY9GHCbvFc+G8jVNsCBEc4GfrcDZHfP6/Y+OnK' },
  },
  {
    name: 'wallet-1731277116-977',
    address: 'agoric1j9j5lydpj2ennxhq7ks6ca6p0s6sj0p7y63a44',
    pubkey: { key: 'AutyvnEsTWfhTjGn3aTagWkjjE9K1xS5KSSORnFDQVzm' },
  },
  {
    name: 'wallet-1731277116-978',
    address: 'agoric1eg8al2cltuhwm9p3jhh0zhvyrsm8hxjc7ndh99',
    pubkey: { key: 'AsfZKbUA55hQ98tV4upl1uOCCjCxyfsSmd1SHNwC3mh+' },
  },
  {
    name: 'wallet-1731277116-979',
    address: 'agoric1nu992k3nkx5dgq0epy3st506n5ngwwvczgq5r2',
    pubkey: { key: 'AkUoMVLx4cc3+wc4A3X15bjqwSC2yk4J6QLjKgEP9HOG' },
  },
  {
    name: 'wallet-1731277116-98',
    address: 'agoric1zhnercl2axphfm0wezp42y77uxr4rqs8e8juds',
    pubkey: { key: 'A7W+meOcwUeUapSaeSwkOhNgwEtekiWaE0TZfBNsC9WI' },
  },
  {
    name: 'wallet-1731277116-980',
    address: 'agoric1496fjxxv2kskdr2f4wr5sgpzwr6xv7cf353rj9',
    pubkey: { key: 'AsP3YvpoIq/Dt2vKAJUTgJsL73kgpRLntW+qJ2N5q39E' },
  },
  {
    name: 'wallet-1731277116-981',
    address: 'agoric1d9ssdxl25w7dt8evd6fjl9ynazpau7dhqm5erm',
    pubkey: { key: 'A1kaLgQTYk6G1bRlnOnHPLc42kyF0XTkXgS0ESszQg7A' },
  },
  {
    name: 'wallet-1731277116-982',
    address: 'agoric12thwe9wetwz9s4fu5dek90v9gevhjxrflngs9z',
    pubkey: { key: 'A35g30uskTTFTkKMMRKhug5+sQHLReuM28aTns4L0ifk' },
  },
  {
    name: 'wallet-1731277116-983',
    address: 'agoric1dzx047dqrfftn3h64ypwqzptnlksp4vfds9jvd',
    pubkey: { key: 'AjjW3THgdoMT0g0ur8QFFBRZAOh72oqUVnWXqbcTuPf/' },
  },
  {
    name: 'wallet-1731277116-984',
    address: 'agoric1hf63tvrggm8qxdfuhr9qn8ke9e4gtrhk76th9t',
    pubkey: { key: 'Ar9e3yclANl0OjIq2vW67LnHOWNrp/3+KtTjTREaHqiq' },
  },
  {
    name: 'wallet-1731277116-985',
    address: 'agoric198v67hcjh62t8sgdj9uzv6aktryfs05rdw7rdl',
    pubkey: { key: 'ApqZ39Y41AQezWBea1ET6sYXa2Y6BNO/qYA9ez9JhaNz' },
  },
  {
    name: 'wallet-1731277116-986',
    address: 'agoric1y8ze9fwleysl8v62zh8237f7ysxhsnaa00d62q',
    pubkey: { key: 'ApUftUX6ScdoU51tjApM6X0CPxZEKr2M5/d+C8rQsEtN' },
  },
  {
    name: 'wallet-1731277116-987',
    address: 'agoric1fmrjnaks9hwe4pp06hlfwza7mrmuv59t8q4sxh',
    pubkey: { key: 'AmtYX9IV897/7oqUT0Mjy4BMFjkudaH60MbHH1Sexx/R' },
  },
  {
    name: 'wallet-1731277116-988',
    address: 'agoric16205r7g362f3ckg9e8nm2tuv0nz8ayrl00n8ej',
    pubkey: { key: 'A5Wx6TEWe587e6EiZ1WgJZDc4L6CsM3Q1rCJWxSI7S8M' },
  },
  {
    name: 'wallet-1731277116-989',
    address: 'agoric1f87fugsljfqspu394sepg6snq80ugt4m40dzyq',
    pubkey: { key: 'AquMwNIaPxbNPVqyRHN9OxAQQ47wyZFFzTsiE2TuPFJW' },
  },
  {
    name: 'wallet-1731277116-99',
    address: 'agoric1h3r0dj3wg835pvtsnpsa3vzarwl6w3xy0a5qwm',
    pubkey: { key: 'A8GntXJc0DZaBEiWXmbuKHx7yX6OTW3JacUaLdHNGRKG' },
  },
  {
    name: 'wallet-1731277116-990',
    address: 'agoric17ntf62l053kjgj9fwaccg42nc3kx498nvd0cke',
    pubkey: { key: 'AqwHw2Fh8bd4l0zQL5rf/nfY8J+O15tEbKDIJVlqqvvT' },
  },
  {
    name: 'wallet-1731277116-991',
    address: 'agoric1lx8g9sqcv4gta7hsapwndwx5vyx46l9ga82jdq',
    pubkey: { key: 'AmvsFIDJCAVqjJiOLehxpM05V9FHtaRap58GFSOxr2Wm' },
  },
  {
    name: 'wallet-1731277116-992',
    address: 'agoric1ag98x87kmqgngf0qlu5zyrt6clh4pzf2wlxch2',
    pubkey: { key: 'AtO5kZb/G+VImL8fLWYthh9ajSIiykhGOHNau0JNrZDV' },
  },
  {
    name: 'wallet-1731277116-993',
    address: 'agoric1hr9wdtttuxy2twm0v0cvyj5hwayss2h7zkkpmj',
    pubkey: { key: 'ArL3Za8Ag+Kn6lRT4NiAYK9psy/k4wh9d14RZ8/hpYkZ' },
  },
  {
    name: 'wallet-1731277116-994',
    address: 'agoric1783l3hgrzpravesgf03s98v6ucuatlf2g3xakn',
    pubkey: { key: 'A51YIasWfb3vhGqTawc09zvozS8MXWQCeZ2eQNTyW65Z' },
  },
  {
    name: 'wallet-1731277116-995',
    address: 'agoric148wjy83fkvl6xhlwpgywax6twg6gjzvv4nkusj',
    pubkey: { key: 'A22aH0H0/UO2JmJLP6PA9jvOl+gWPZCiDtw0QTXtHMed' },
  },
  {
    name: 'wallet-1731277116-996',
    address: 'agoric10u04h5qt2dw9xmqax89ek3p2zvrxn39a00jh77',
    pubkey: { key: 'AySGuzFYioqXzCE7XS5MLzsSogSdCpw1N1DsgbWugmvS' },
  },
  {
    name: 'wallet-1731277116-997',
    address: 'agoric1fgtaqv0ll9l9zuc940jnsy4p7g96s5snwyf4ct',
    pubkey: { key: 'AlfjnSJ6JxdMWXDxi2IU7ERBQAaxsx6/R4iw7OmtVuu3' },
  },
  {
    name: 'wallet-1731277116-998',
    address: 'agoric1v62u2dxkp87x0tp5n9t39unte9sf885elemlgx',
    pubkey: { key: 'Al4KLy857jmo99Eis1gYGxbBwCGarNpDOGG+SSJO2qQA' },
  },
  {
    name: 'wallet-1731277116-999',
    address: 'agoric18r8zndgw7q0jndkmt3x2r9lqveja80ul8596nn',
    pubkey: { key: 'AmbFAfc/qPdahtboa6gcML9akJVXt+qV1K6/DCMaeK/q' },
  },
];

export default keys;
