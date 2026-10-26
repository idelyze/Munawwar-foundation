import { useState } from "react";
import {
  FileText,
  ArrowUpRight,
  Copy,
  Check,
  Landmark,
  Download,
} from "lucide-react";
import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";

const bankAccounts = foundation.bankAccounts;
const documents = foundation.documents;

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const input = document.createElement("textarea");
      input.value = value;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button className="copy-detail-button" type="button" onClick={copyValue}>
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? "Copied" : label}
    </button>
  );
}

function BankAccountCard({ account }) {
  return (
    <article className="bank-account-card">
      <div className="bank-card-top">
        <span className="bank-icon">
          <Landmark size={21} />
        </span>
        <span className="eyebrow">Official bank account</span>
      </div>
      <h3>{account.name}</h3>
      <p className="bank-account-holder">{account.accountName}</p>
      <div className="bank-details-list">
        <div>
          <span>Account type</span>
          <strong>{account.type}</strong>
        </div>
        {account.branch && (
          <div>
            <span>Branch</span>
            <strong>{account.branch}</strong>
          </div>
        )}
        <div className="bank-account-number">
          <span>Account number</span>
          <strong>{account.accountNumber}</strong>
        </div>
        <div>
          <span>IFSC code</span>
          <strong>{account.ifsc}</strong>
        </div>
        {account.micr && (
          <div>
            <span>MICR code</span>
            <strong>{account.micr}</strong>
          </div>
        )}
      </div>
      <div className="bank-copy-actions">
        <CopyButton value={account.accountNumber} label="Copy account number" />
        <CopyButton value={account.ifsc} label="Copy IFSC" />
      </div>
    </article>
  );
}

export default function Documents() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Transparency</div>
          <h2>Open information. Accountable action.</h2>
          <p className="lead">
            Explore Munawwar Foundation’s official documents and use the bank
            details below to support our work. Please verify the account name
            before making a transfer.
          </p>
        </div>
      </section>

      <section id="bank-accounts" className="section transparency-bank-section">
        <div className="container">
          <SectionHeading
            eyebrow="Support our work"
            title="Official bank accounts."
          />
          <p className="transparency-intro">
            Make your transfer directly to an account held in the name of
            Munawwar Foundation. Never share your banking password, PIN or OTP
            with anyone claiming to represent the Foundation.
          </p>
          <div className="bank-account-grid">
            {bankAccounts.map((account) => (
              <BankAccountCard key={account.name} account={account} />
            ))}
          </div>
        </div>
      </section>

      <section className="section transparency-documents-section">
        <div className="container">
          <SectionHeading
            eyebrow="Official records"
            title="Registration, governance & reports."
          />
          <div className="document-grid">
            {documents.map((item) => (
              <article
                className="document-card transparency-document-card"
                key={item.title}
              >
                <FileText size={22} />
                <div>
                  <div className="eyebrow">{item.type}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    className="text-link"
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View / download <Download size={15} />{" "}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="registration-reference-grid">
            <div className="registration-reference">
              <span className="eyebrow">Society registration number</span>
              <strong>{foundation.registration.registrationNo}</strong>
            </div>
            <div className="registration-reference">
              <span className="eyebrow">NGO Darpan ID</span>
              <strong>{foundation.registration.ngoDarpanId}</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
