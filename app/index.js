import {ethers} from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import "./index.scss";

let contracts = 0;
async function newContract() {
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  const value = ethers.BigNumber.from(document.getElementById("ether").value);
  const contract = await deploy(arbiter, beneficiary, value);
  addContract(++contracts, contract, arbiter, beneficiary, ethers.utils.parseEther(value));
}

document.getElementById("deploy").addEventListener("click", newContract);
