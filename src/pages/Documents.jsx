import { useState } from "react";
import {
  FileText,
  ArrowUpRight,
  ShieldCheck,
  Copy,
  Check,
  Landmark,
  Download,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";

const bankAccounts = [
  {
    name: "Equitas Small Finance Bank",
    branch: "MP Nagar",
    accountName: "Munawwar Foundation",
    type: "Current Account",
    accountNumber: "200002713933",
    ifsc: "ESFB0014001",
    micr: "462756001",
  },
  {
    name: "Axis Bank",
    accountName: "Munawwar Foundation",
    type: "Current Account",
    accountNumber: "926020030841711",
    ifsc: "UTIB0002819",
  },
];

const documents = [
  {
    title: "Society Registration Certificate",
    description: "Registration certificate issued by the Madhya Pradesh Registrar of Societies.",
    file: "/documents/registration-certificate.pdf",
    type: "Registration",
  },
  {
    title: "NGO Darpan Registration Details",
    description: "Foundation profile and registration details from NGO Darpan.",
    file: "/documents/ngo-darpan-details.pdf",
    type: "Verification",
  },
  {
    title: "Foundation By-laws",
    description: "Governing rules and regulations of Munawwar Foundation.",
    file: "/documents/foundation-bylaws.pdf",
    type: "Governance",
  },
  {
    title: "Annual Report 2024–25",
    description: "Activities and information documented for the 2024–25 financial year.",
    file: "/documents/ANNUAL REPORT 2024-25 MUNAWWAR FOUNDATION.pdf",
    type: "Annual report",
  },
  {
    title: "Annual Report 2025–26",
    description: "Activities and information documented for the 2025–26 financial year.",
    file: "/documents/Annual Report 2025-26 Munawwar Foundation.pdf",
    type: "Annual report",
  },
];

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
        <span className="bank-icon"><Landmark size={21} /></span>
        <span className="eyebrow">Official bank account</span>
      </div>
      <h3>{account.name}</h3>
      <p className="bank-account-holder">{account.accountName}</p>
      <div className="bank-details-list">
        <div><span>Account type</span><strong>{account.type}</strong></div>
        {account.branch && <div><span>Branch</span><strong>{account.branch}</strong></div>}
        <div className="bank-account-number">
          <span>Account number</span><strong>{account.accountNumber}</strong>
        </div>
        <div><span>IFSC code</span><strong>{account.ifsc}</strong></div>
        {account.micr && <div><span>MICR code</span><strong>{account.micr}</strong></div>}
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
          <h1>Open information. Accountable action.</h1>
          <p className="lead">
            Explore Munawwar Foundation’s official documents and use the bank
            details below to support our work. Please verify the account name
            before making a transfer.
          </p>
        </div>
      </section>

      <section className="section transparency-bank-section">
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
              <article className="document-card transparency-document-card" key={item.title}>
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
                    View / download <Download size={15} /> <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="transparency-privacy-note">
            <ShieldCheck size={17} />
            For privacy, the Foundation’s PAN card is not published on this page.
            A public-safe copy can be added after the Foundation approves the
            version to be shared.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
